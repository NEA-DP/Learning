import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person: Person;
  errors: string[] = [];

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadContact();
  }

  loadContact() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.contactService.getContact(id).subscribe(contact => {
      if (contact === undefined) {
        this.router.navigate(['404']);
      } else {
        this.person = contact;
      }
    });
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.contactService.updateContact(this.person)
    .subscribe(() => this.goBack(), errors => this.errors = errors.messages);
  }
}
