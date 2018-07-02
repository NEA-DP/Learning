import { Injectable } from '@angular/core';
import { Person } from './person';
import {Contacts} from './fake-contacts';
import {LoggerService} from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiBaseUrl = 'http://localhost:17023/api/contacts';

  constructor(
    private logger: LoggerService,
    private http: HttpClient
  ) { }


  getContacts(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiBaseUrl}`)
    .pipe(tap(contacts => this.logger.debug('contacts are loaded')));
  }

  getContact(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiBaseUrl}/${id}`)
    .pipe(tap(contacts => this.logger.debug('contact is loaded')));
  }

  updateContact(person: Person): Observable<any>  {
    return this.http.put(`${this.apiBaseUrl}/${person.id}`, person).pipe(
      catchError(this.handlerUpdateError())
    );
  }

  handlerUpdateError() {
    return (error: any) => {
      this.logger.debug(error.message);
      let messages: string[] = [];
      if (error.error.ModelState) {
        for (const field in error.error.ModelState) {
          messages = messages.concat(error.error.ModelState[field]);
        }
      } else {
        messages.push(error.message);
      }

      return throwError({
        messages: messages
      });
    };
  }

  serachContact(term: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiBaseUrl}?term=${term}`)
    .pipe(tap(contacts => this.logger.debug('search ')));
  }

  createContact(person: Person): Observable<any> {

    return this.http.post(`${this.apiBaseUrl}/${person.id}`, person).pipe(
      catchError(this.handlerUpdateError())
    );
  }

  deleteContact(person: Person): Observable<any>  {
    return this.http.delete(`${this.apiBaseUrl}/${person.id}`);
  }
}
