import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Person } from '../person';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Location} from '@angular/common';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { numberValidator } from '../validators';
import { GoBackComponent } from '../go-back/go-back.component';
import { PersonVm } from '../personVm';
import { Group } from '../group';
import { forkJoin } from 'rxjs';
import { GroupService } from '../group.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  contactId: number;

  groups: Group[] = [];
  selectedGroup: Group;

  errors: string[] = [];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    number: new FormControl('', [Validators.required, numberValidator]),
    email: new FormControl(''),
    groupsSelect: new FormControl('')
  });

  @ViewChild(GoBackComponent) goBack: GoBackComponent;

  constructor(
    private contactService: ContactService,
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    forkJoin(
      this.contactService.getContacts(),
      this.groupService.getGroups()
    ).subscribe(
      ([contacts, groups]) => {
        this.contactId = Math.max.apply(null, contacts.map(function(p) { return p.id; })) + 1;
        let groupsModel = [{
          id: -1,
          name: 'Not selected'
        }];
        groupsModel = groupsModel.concat(groups);

        const np: Person = {
          name: '',
          number: '',
          email: '',
          id: this.contactId,
          groupId: -1
        };

        this.setContact(PersonVm.createPersonVm(np, ''), groupsModel, groupsModel[0]);
      }
    );
  }

  setContact(contact: PersonVm, groups: Group[], selectedGroup: Group) {
    this.contactId = contact.id;
    this.groups = groups;
    this.selectedGroup = selectedGroup;

    this.form.setValue({
      name: contact.name,
      number: contact.number,
      email: contact.email,
      groupsSelect: this.selectedGroup
    });
  }

  onSubmit() {
    // debugger;
    const model = this.form.value;
    const contact: Person = {
      id: this.contactId,
      name: model.name,
      number: model.number,
      email: model.email,
      groupId: model.groupsSelect.id === -1 ? null : model.groupsSelect.id
    };

    this.contactService.createContact(contact)
      .subscribe(() => this.router.navigate(['contacts']), errors => this.errors = errors.messages);
  }
}
