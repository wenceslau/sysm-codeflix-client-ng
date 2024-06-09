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

  featuredMovie: Movie | undefined;

  constructor(private apiMovieService: ApiMovieService ) { }

   ngOnInit() {
     this.apiMovieService.getFeaturedMovie('103')
       .subscribe({
         next: (data) => {
           this.featuredMovie = data;
           console.log(data);
         },
         error: (e) => console.error(e)
       });
    // const genres = ['Biography', 'Action', 'Drama', 'Comedy', 'Crime'];
    // const movies = await Promise.all(genres.map(async genre => {
    //       const movies = await this.apiRequestService.getMoviesByGenre(genre, { _limit: 8 });
    //       return { sectionTitle: genre, movies}
    //     })
    // );
  }

}
