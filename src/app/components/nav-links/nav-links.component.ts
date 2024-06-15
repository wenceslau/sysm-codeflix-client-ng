import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {

  constructor(private router: Router) { }

  navigateToGenre(genre: string) {
    console.log('navigateToGenre', genre);
    this.router.navigate(['/search'], { queryParams: { genre } });
  }

}
