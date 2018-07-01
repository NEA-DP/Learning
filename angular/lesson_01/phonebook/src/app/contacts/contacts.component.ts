import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ContactService } from '../contact.service';
import {ActivatedRoute, Router} from '@angular/router';

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
    this.contactService.deleteContact(person).subscribe(_ => {
      this.router.navigate(['/']);
    });
  }


}
