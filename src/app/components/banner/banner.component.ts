import {Component, Input} from '@angular/core';
import {Movie} from '../../types/movies';
import {Router} from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  @Input() movie: Movie | undefined;

  constructor(private router: Router) {
  }

  watch() {
    this.router.navigate(['player', this.movie?.id]);
  }
}
