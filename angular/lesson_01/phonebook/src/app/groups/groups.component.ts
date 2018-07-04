import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../group';
import { GroupService } from '../group.service';
import { Observable } from 'rxjs';
import { tap, switchMap, finalize } from 'rxjs/operators';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Observable<Group[]>;

  isLoading = false;

  constructor(
    private contactService: ContactService,
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.groups = this.activatedRoute
      .params
      .pipe(
        tap(() => this.isLoading = true),
        switchMap(params => this.loadGroups(params['term'])
          .pipe(
            finalize(() => this.isLoading = false)
          )
        )
      );

    this.activatedRoute.params.subscribe(params => this.loadGroups(params['term']));
  }

  loadGroups(term: string): Observable<Group[]> {
    let getGroups: Observable<Group[]>;
    if (term) {
      getGroups = this.groupService.serachGroups(term);
    } else {
      getGroups = this.groupService.getGroups();
    }
    return getGroups;
  }


  delete(id: number) {
    this.contactService.getContacts().pipe(
      tap(contacts => {
        contacts.forEach(c => {
          if (c.groupId === id) {
            this.contactService.updateContact(c).subscribe();
          }
        });
      })
    ).subscribe();


    this.groupService.deleteGroup(id).subscribe(dg => {
      this.groups = this.groups.pipe(
        tap(gs => {
          const x = gs.find(g => g.id === (<Group>dg).id);
          const index = gs.indexOf(x);
          if (index > -1) {
            gs.splice(index, 1);
          }
        })
      );
    });
  }

}
