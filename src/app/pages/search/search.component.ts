import { Component } from '@angular/core';
import {Movie} from "../../types/movies";
import {ApiMovieService} from "../../services/api-movie.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  movies: Movie[] = [];

  constructor(apiMovieService: ApiMovieService) {

    apiMovieService.searchMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });

  }

}
