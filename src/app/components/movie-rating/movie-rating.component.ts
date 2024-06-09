import {Component, Input} from '@angular/core';
import {Movie} from "../../types/movies";
import {an} from "vidstack/types/vidstack-knV-Kht3";

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrl: './movie-rating.component.scss'
})
export class MovieRatingComponent {

  @Input() rating: string | undefined;

  textColor = (rating: any) => {
    switch (rating) {
      case 'pg':
        return 'text-green-500';
      case 'pg-13':
        return 'text-yellow-500';
      case 'r':
        return 'text-red-500';
      case 'nc-17':
        return 'text-red-700';
      default:
        return 'text-white';
    }
  };

}
