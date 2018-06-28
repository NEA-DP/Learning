import { Injectable } from '@angular/core';
import { Person } from './person';
import {Contacts} from './fake-contacts';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private logger: LoggerService) { }

  getContacts(): Person[] {
    this.logger.debug('contacts are loaging');
    return Contacts;
  }

  getContact(id: number): Person {
    return Contacts.find(c => c.id === id);
  }

  createContact(): Person {
    const newPerson = new Person();
    newPerson.id = Contacts.length + 1;
    Contacts.push(newPerson);
    return newPerson;
  }

  deleteContact(person: Person) {
    const index: number = Contacts.indexOf(person);
    if (index !== -1) {
      Contacts.splice(index, 1);
    }
  }
}
