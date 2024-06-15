import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  // API_URL = 'https://codeflix-api-inky.vercel.app';
  API_URL = environment.api;


  constructor(private http: HttpClient) {
  }

  get(endpoint: string,
      query: ApiQueryParams = {},
      options: RequestOptions = {}): Observable<any> {

    const httpHeader = this.buildHeader();
    const urlEndpoint = this.buildEndpoint(endpoint, options, query);

    return this.http.get(urlEndpoint, {headers: httpHeader});
  }

  post(endpoint: string,
       body: any,
       query: ApiQueryParams = {},
       options: RequestOptions = {}): Observable<any> {

    const httpHeader = this.buildHeader();
    const urlEndpoint = this.buildEndpoint(endpoint, options, query);

    return this.http.post(urlEndpoint, body, {headers: httpHeader});
  }

  put(endpoint: string,
       body: any,
       query: ApiQueryParams = {},
       options: RequestOptions = {}): Observable<any> {

    const httpHeader = this.buildHeader();
    const urlEndpoint = this.buildEndpoint(endpoint, options, query);

    return this.http.put(urlEndpoint, body, {headers: httpHeader});
  }

  patch(endpoint: string,
      body: any,
      query: ApiQueryParams = {},
      options: RequestOptions = {}): Observable<any> {

    const httpHeader = this.buildHeader();
    const urlEndpoint = this.buildEndpoint(endpoint, options, query);

    return this.http.patch(urlEndpoint, body, {headers: httpHeader});
  }

  delete(endpoint: string,
        query: ApiQueryParams = {},
        options: RequestOptions = {}): Observable<any> {

    const httpHeader = this.buildHeader();
    const urlEndpoint = this.buildEndpoint(endpoint, options, query);

    return this.http.delete(urlEndpoint,  {headers: httpHeader});
  }

  private buildHeader() {

    let httpHeader = new HttpHeaders();
    httpHeader = httpHeader
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/json')
      .append('Access-Control-Allow-Origin', '*');
      //.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return httpHeader;
  }

  private buildQueryString(params: ApiQueryParams) {

    const query = Object.entries(params).filter(
      ([, value]) => value !== undefined
    ).map(([key, value]) => [key, encodeURIComponent(value)]);

    return `?${new URLSearchParams(Object.fromEntries(query)).toString()};`;
  }

  private fetchQueryString(options: RequestOptions, query: ApiQueryParams) {

    const mergedOptions: RequestOptions = {...defaultOptions, ...options};
    return this.buildQueryString({...query, ...mergedOptions});
  }

  private buildEndpoint(endpoint: string, options: RequestOptions, query: ApiQueryParams) {

    const queryString = this.fetchQueryString(options, query);
    return `${(this.API_URL)}/${endpoint}${queryString}`;
  }


}

export interface ApiQueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  page?: number;
  _limit?: number;
}

export const defaultOptions: RequestOptions = {
  page: 1,
  _limit: 10,
};
