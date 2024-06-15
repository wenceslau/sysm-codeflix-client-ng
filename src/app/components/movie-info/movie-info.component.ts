import {Component, Input} from '@angular/core';
import {Movie} from '../../types/movies';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.scss'
})
export class MovieInfoComponent {

  @Input() movie: Movie | undefined;

  constructor(private router: Router) {

  }

  watch(): void {
    this.router.navigate(['/player/' + this.movie?.id]);
  }


}
