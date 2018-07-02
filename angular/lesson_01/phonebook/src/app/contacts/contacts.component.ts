import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ContactService } from '../contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  people: Person[];

  constructor(
    private contactService: ContactService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.loadContacts(params['term']));
  }

  loadContacts(term: string) {
    if (term) {
      this.contactService.serachContact(term).subscribe(contacts => this.people = contacts);
    } else {
      this.contactService.getContacts().subscribe(contacts => this.people = contacts);
    }
  }


  delete(person: Person) {
    this.contactService.deleteContact(person).subscribe(pp => {
      const x = this.people.find(p => p.id === pp.id);
      const index = this.people.indexOf(x);
      if (index > -1) {
        this.people.splice(index, 1);
      }
    } );
  }


}
