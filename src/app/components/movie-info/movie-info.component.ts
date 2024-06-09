import {Component, Input} from '@angular/core';
import {Movie} from "../../types/movies";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.scss'
})
export class MovieInfoComponent {

  @Input() movie: Movie | undefined


}
