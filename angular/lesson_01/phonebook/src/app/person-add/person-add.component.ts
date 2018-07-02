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
  people: Person[];
  errors: string[] = [];

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => {this.people = contacts;
      this.person = new Person();
      const ids = this.people.map(function(p) { return p.id; });
      const id = Math.max.apply(null, ids) + 1;
      this.person.id = id;
    });
  }


  goBack() {
    this.location.back();
  }



  save() {
    this.contactService.createContact(this.person)
    .subscribe(() => this.router.navigate(['contacts']), errors => this.errors = errors.messages);
  }
}
