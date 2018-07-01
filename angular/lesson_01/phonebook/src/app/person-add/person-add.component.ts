import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  person: Person;
  errors: string[] = [];

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.person = new Person();
    this.person.id = 11;
  }


  goBack() {
    this.location.back();
  }


  add() {
    this.contactService.createContact(this.person).subscribe(_ => {
      this.router.navigate(['/']);
    });
  }

}
