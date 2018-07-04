import { Injectable } from '@angular/core';
import { Person } from './person';
import { LoggerService } from './logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { handlerError, handlerCrudError } from './errorHandlers';

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
      .pipe(
        tap(contacts =>
          this.logger.debug(`contacts are loaded. Count: ${contacts.length}.`)
        ),
        catchError(handlerError<Person[]>('getContacts', []))
      );

  }

  serachContacts(term: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiBaseUrl}?term=${term}`)
      .pipe(
        tap(contacts =>
          this.logger.debug(`search contacts. Found: ${contacts.length}.`)
        ),
        catchError(handlerError<Person[]>('serachContacts', []))
      );
  }

  getContact(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiBaseUrl}/${id}`)
      .pipe(
        tap(contact =>
          this.logger.debug(`contact is loaded. id: ${contact.id}`)
        ),
        catchError(handlerCrudError())
      );
  }

  updateContact(person: Person): Observable<Object> {
    return this.http.put(`${this.apiBaseUrl}/${person.id}`, person)
      .pipe(
        tap(_ =>
          this.logger.debug(`contact is updated. id: ${person.id}`)
        ),
        catchError(handlerCrudError())
    );
  }

  createContact(person: Person): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/${person.id}`, person)
      .pipe(
        tap(_ =>
          this.logger.debug(`contact is created. id: ${person.id}`)
        ),
        catchError(handlerCrudError())
      );
  }

  deleteContact(contactId: number): Observable<Object> {
    return this.http.delete(`${this.apiBaseUrl}/${contactId}`)
      .pipe(
        tap(_ =>
          this.logger.debug(`contact is deleted. id: ${contactId}`)
        ),
        catchError(handlerCrudError())
      );
  }
}
