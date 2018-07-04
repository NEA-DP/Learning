import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Group } from './group';
import { handlerError, handlerCrudError } from './errorHandlers';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private apiBaseUrl = 'http://localhost:17023/api/groups';

  constructor(
    private logger: LoggerService,
    private http: HttpClient
  ) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.apiBaseUrl}`)
      .pipe(
        tap(groups =>
          this.logger.debug(`groups are loaded. Count: ${groups.length}.`)
        ),
        catchError(handlerError<Group[]>('getGroups', []))
      );
  }

  serachGroups(term: string): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.apiBaseUrl}?term=${term}`)
      .pipe(
        tap(groups =>
          this.logger.debug(`search groups. Found: ${groups.length}.`)
        ),
        catchError(handlerError<Group[]>('serachGroups', []))
      );
  }

  getGroup(id: number): Observable<Group> {
    return this.http.get<Group>(`${this.apiBaseUrl}/${id}`)
      .pipe(
        tap(_ =>
          this.logger.debug(`group is loaded. id: ${id}`)
        ),
        catchError(handlerCrudError())
      );
  }

  updateGroup(group: Group): Observable<Object> {
    return this.http.put(`${this.apiBaseUrl}/${group.id}`, group)
      .pipe(
        tap(_ =>
          this.logger.debug(`group is updated. id: ${group.id}`)
        ),
        catchError(handlerCrudError())
      );
  }

  createGroup(group: Group): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/${group.id}`, group)
      .pipe(
        tap(_ =>
          this.logger.debug(`group is created. id: ${group.id}`)
        ),
        catchError(handlerCrudError())
      );
  }

  deleteGroup(groupId: number): Observable<Object> {
    return this.http.delete(`${this.apiBaseUrl}/${groupId}`)
    .pipe(
      tap(_ =>
        this.logger.debug(`group is deleted. id: ${groupId}`)
      ),
      catchError(handlerCrudError())
    );
  }


}
