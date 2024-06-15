import {Component, Input} from '@angular/core';
import {Movie} from '../../types/movies';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrl: './movie-row.component.scss'
})
export class MovieRowComponent {

  @Input() movies: Movie[] = [];
  @Input() sectionTitle: string | undefined;

}
