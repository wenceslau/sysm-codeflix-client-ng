import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {
  searchTerm: any;

  constructor(
    private router: Router
  ) {
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
