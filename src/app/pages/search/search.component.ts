import {Component, OnInit} from '@angular/core';
import {Movie} from '../../types/movies';
import {ApiMovieService} from '../../services/api-movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private apiMovieService: ApiMovieService,
    private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {

    this.activatedRoute.queryParamMap.subscribe(params => {

      const title: string  =   params.get('title')?.toString() || '';
      const genre = params.get('genre')?.toString() || '';

      console.log('SearchComponent.ngOnInit', title, genre);

      this.apiMovieService.searchMovies(title, genre)
        .subscribe({
          next: (data) => {
            this.movies = data;
          },
          error: (e) => console.error(e)
        });

    });
  }

}
