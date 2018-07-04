import { Component, OnInit, ViewChild } from '@angular/core';
import { Group } from '../group';
import { GroupService } from '../group.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoBackComponent } from '../go-back/go-back.component';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {

  groupId: number;
  errors: string[] = [];

  @ViewChild(GoBackComponent) goBack: GoBackComponent;

  form = new FormGroup({
    name: new FormControl('', Validators.required)
  });


  constructor(
    private groupService: GroupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.groupService.getGroups().subscribe(groups => {
      this.setGroup( Math.max.apply(null, groups.map(function(p) { return p.id; })) + 1);
    });
  }

  setGroup(groupId: number) {
    this.groupId = groupId;

    this.form.setValue({
      name: ''
    });
  }

  onSubmit() {
    const model = this.form.value;
    const group: Group = {
      id: this.groupId,
      name: model.name
    };

    this.groupService.createGroup(group)
      .subscribe(() => this.goBack.goBack(), errors => this.errors = errors.messages);
  }
}
