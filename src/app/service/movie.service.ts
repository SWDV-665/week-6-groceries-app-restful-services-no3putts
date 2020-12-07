import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class MovieService {

  baseUrl = "https://gateway.maverik.com/movie/api/movie/title/";
  urlParam = "?source=omdb";

  constructor(private http: HttpClient) {}

  getMovie(title: string){
    console.log("**************Calling******************");
    console.log(this.baseUrl + title + this.urlParam);
    console.log("********************************");
    return this.http.get(this.baseUrl + title + this.urlParam);
  }
}
