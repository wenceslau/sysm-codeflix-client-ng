import { Injectable } from '@angular/core';
import {ApiRequestService} from "./api-request.service";
import {Movie} from "../types/movies";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiMovieService {

  private endpoint = '/movies';

  constructor(private apiRequestService: ApiRequestService) { }

   getFeaturedMovie(id: string) : Observable<any> {
    return this.apiRequestService.get(`featured/${id}`);
  }
}
