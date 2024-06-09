import {Component, Input} from '@angular/core';
import {Movie} from "../../types/movies";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  @Input() movie: Movie | undefined


}
