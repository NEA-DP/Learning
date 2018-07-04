import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Group } from '../group';
import { ActivatedRoute, Router} from '@angular/router';
import { GroupService } from '../group.service';
import { GoBackComponent } from '../go-back/go-back.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  groupId: number;
  errors: string[] = [];

  @ViewChild(GoBackComponent) goBack: GoBackComponent;

  form = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadGroup();
  }

  loadGroup() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.groupService.getGroup(id).subscribe(group => {
      this.setGroup(group);
    },
    _ => this.router.navigate(['404']));
  }

  setGroup(group: Group) {
    this.groupId = group.id;

    this.form.setValue({
      name: group.name
    });
  }

  onSubmit() {
    const model = this.form.value;
    const group: Group = {
      id: this.groupId,
      name: model.name
    };

    this.groupService.updateGroup(group)
      .subscribe(() => this.goBack.goBack(), errors => this.errors = errors.messages);
  }
}
