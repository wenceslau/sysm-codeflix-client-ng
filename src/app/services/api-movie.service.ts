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
    return this.apiRequestService.get(`featured/${id}`);
  }

  getMoviesByGenre(genre: string, options?: RequestOptions): Observable<any> {
    return this.apiRequestService.get(
      'movies',
      { genres_like: encodeURIComponent(genre) },
      options
    );
  }
}
