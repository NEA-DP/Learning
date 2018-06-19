import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  people: Person[] = [
    {order: 1, name: 'A. Aaaaaaaa', number: '111-111-111'},
    {order: 2, name: 'B. Bbbbbbbb', number: '222-222-222'},
    {order: 3, name: 'C. Cccccccc', number: '333-333-333'}
  ];

  selectedPerson: Person;
  constructor() { }

  ngOnInit() {
  }

  onSelect(person: Person) {
    this.selectedPerson = person;
  }

  delete(person: Person) {
    const index: number = this.people.indexOf(person);
    if (index !== -1) {
        this.people.splice(index, 1);
    }
  }

  add() {
    const newPerson = new Person();
    this.people.push(newPerson);
    this.onSelect(newPerson);
  }
}
