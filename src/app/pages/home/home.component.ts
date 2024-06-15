import {Component, OnInit} from '@angular/core';
import {ApiMovieService} from '../../services/api-movie.service';
import {Movie} from '../../types/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  genreMovies: GenreMovies[] = [];
  featuredMovie: Movie | undefined;
  genres = ['Biography', 'Action', 'Drama', 'Comedy', 'Crime'];

  constructor(private apiMovieService: ApiMovieService ) { }

   ngOnInit() {
     this.loadFeaturedMovie();
     this.loadMoviesByGenre();
   }

  private loadMoviesByGenre() {
    console.log('loadMoviesByGenre');
    this.genres.map(genre => {

      this.apiMovieService.getMoviesByGenre(genre, {_limit: 8})
        .subscribe({
          next: (data) => {
            this.genreMovies.push({sectionTitle: genre, movies: data});
          },
          error: (e) => console.error(e)
        });

    });
  }

  private loadFeaturedMovie() {
    console.log('loadFeaturedMovie');
    this.apiMovieService.getFeaturedMovie('105')
      .subscribe({
        next: (data) => {
          console.log('getFeaturedMovie', data);
          this.featuredMovie = data;
        },
        error: (e) => console.error(e)
      });
  }
}

export interface GenreMovies{
  sectionTitle: string;
  movies: Movie[];
}
