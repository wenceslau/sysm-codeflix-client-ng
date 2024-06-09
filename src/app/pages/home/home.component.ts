import { Component } from '@angular/core';
import {ApiRequestService} from "../../services/api-request.service";
import {ApiMovieService} from "../../services/api-movie.service";
import {Movie} from "../../types/movies";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  genreMovies: GenreMovies[] = [];
  featuredMovie: Movie | undefined;
  genres = ['Biography', 'Action', 'Drama', 'Comedy', 'Crime'];

  constructor(private apiMovieService: ApiMovieService ) { }

   ngOnInit() {
     this.apiMovieService.getFeaturedMovie('105')
       .subscribe({
         next: (data) => {
           this.featuredMovie = data;
           console.log(data);
         },
         error: (e) => console.error(e)
       });

      this.genres.map(genre => {

        this.apiMovieService.getMoviesByGenre(genre, { _limit: 8 })
          .subscribe({
            next: (data) => {
              this.genreMovies.push({ sectionTitle: genre, movies: data });
              console.log(data);
            },
            error: (e) => console.error(e)
          });

      });
  }
}

export interface GenreMovies{
  sectionTitle: string;
  movies: Movie[];
}
