import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Person } from '../person';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GoBackComponent } from '../go-back/go-back.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonVm } from '../personVm';
import { GroupService } from '../group.service';
import { Group } from '../group';
import { numberValidator } from '../validators';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

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
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadContact();
  }

  loadContact() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.contactService.getContact(id)
      .subscribe(contact => {
        if (contact === undefined) {
          this.router.navigate(['404']);
        } else {
          this.groupService.getGroups().subscribe(groups => {
            let groupsModel = [{
              id: -1,
              name: 'Not selected'
            }];
            groupsModel = groupsModel.concat(groups);
            let selectedGroup = groupsModel[0];

            let gn = '';
            if (contact.groupId) {
              const group = groupsModel.find(g => g.id === contact.groupId);
              if (group) {
                gn = group.name;
                selectedGroup = group;
              }
            }

            this.setContact(PersonVm.createPersonVm(contact, gn), groupsModel, selectedGroup);
          }

          );
        }
      },
        error => this.router.navigate(['404'])
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
    const model = this.form.value;
    const contact: Person = {
      id: this.contactId,
      name: model.name,
      number: model.number,
      email: model.email,
      groupId: model.groupsSelect.id === -1 ? null : model.groupsSelect.id
    };

    this.contactService.updateContact(contact)
      .subscribe(() => this.goBack.goBack(), errors => this.errors = errors.messages);
  }
}
