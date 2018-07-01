import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const contacts: Person[] = [
      {id: 1, name: 'A. Aaaaaaaa', number: '111-111-111', email: 'a@x.com'},
      {id: 2, name: 'B. Bbbbbbbb', number: '222-222-222', email: 'b@x.com'},
      {id: 3, name: 'C. Cccccccc', number: '333-333-333', email: 'ac@x.com'}
    ];
    return {contacts};
  }
}
