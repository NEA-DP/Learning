import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

private searchTerms = new Subject<string>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.searchTerms
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(term => {
      this.router.navigate([this.activatedRoute.snapshot.children[0].url[0].path, term]);
    });
  }

  search(term: string) {
    this.searchTerms.next(term);
  }
}
