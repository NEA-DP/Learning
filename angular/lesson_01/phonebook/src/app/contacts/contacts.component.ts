import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ContactService } from '../contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  people: Person[];

  constructor(
    private contactService: ContactService,
    private router: Router) { }

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.people = this.contactService.getContacts();
  }


  delete(person: Person) {
    this.contactService.deleteContact(person);
  }

  add() {
    const p = this.contactService.createContact();
    this.router.navigate(['/detail', p.id]);
  }
}
