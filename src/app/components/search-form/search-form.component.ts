import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent implements OnInit {
  searchTerm: any;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  submit() {
    this.router.navigate(
      ['/search'],
      {
        queryParams: {title: this.searchTerm},
        queryParamsHandling: 'merge'
      });
  }
}
