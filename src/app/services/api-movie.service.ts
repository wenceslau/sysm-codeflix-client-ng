import {Injectable} from '@angular/core';
import {ApiRequestService} from "./api-request.service";
import {Observable} from "rxjs";
import {RequestOptions} from "./api-request.service";

@Injectable({
  providedIn: 'root'
})
export class ApiMovieService {

  constructor(private apiRequestService: ApiRequestService) {
  }

  getFeaturedMovie(id: string): Observable<any> {
    return this.apiRequestService.get(`featured/${encodeURIComponent(id)}`);
  }

  getMoviesByGenre(genre: string, options?: RequestOptions): Observable<any> {
    return this.apiRequestService.get(
      'movies',
      { genres_like: encodeURIComponent(genre) },
      options
    );
  }

  searchMovies(
    title: string = '',
    genre: string = '',
    options: RequestOptions = {
      _limit: 100
    }
  ): Observable<any> {
    return this.apiRequestService.get(
      'movies',
      {
        title_like: encodeURIComponent(title),
        genres_like: encodeURIComponent(genre),
      },
      options
    );
  }

  getMovieById(id: string) {
    return this.apiRequestService.get(`movies/${encodeURIComponent(id)}`);
  }
}
