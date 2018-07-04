import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../group.service';
import { Observable, forkJoin, of } from 'rxjs';
import { switchMap, tap, map, finalize } from 'rxjs/operators';
import { PersonVm } from '../personVm';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Observable<PersonVm[]>;

  isLoading = false;

  constructor(
    private contactService: ContactService,
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.contacts = this.activatedRoute
      .params
      .pipe(
        tap(() => this.isLoading = true),
        switchMap(params => this.getContacts(params['term'])
          .pipe(
            finalize(() => this.isLoading = false)
          )
        )
      );
  }

  getContacts(term: string): Observable<PersonVm[]> {
    let getContacts: Observable<Person[]>;

    if (term) {
      getContacts = this.contactService.serachContacts(term);
    } else {
      getContacts = this.contactService.getContacts();
    }

    return forkJoin(
      getContacts,
      this.groupService.getGroups()
    ).pipe(
      map(([contacts, groups]) => {
        const result: PersonVm[] = [];
        contacts.forEach(c => {
          let groupName = '';
          if (c.groupId) {
            const group = groups.find(g => g.id === c.groupId);
            if (group) {
              groupName = group.name;
            }
          }
          result.push(PersonVm.createPersonVm(c, groupName));
        });
        return result;
      })
    );
  }

  delete(id: number) {
    this.contactService.deleteContact(id).
      subscribe(dc => {
        this.contacts = this.contacts.pipe(
          tap(cs => {
            const x = cs.find(c => c.id === (<PersonVm>dc).id);
            const index = cs.indexOf(x);
            if (index > -1) {
              cs.splice(index, 1);
            }
          })
        );
      });
  }
}
