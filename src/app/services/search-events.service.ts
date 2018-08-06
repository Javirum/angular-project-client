import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchEventsService {

  private API_URL = 'http://localhost:3000/search';


  constructor(private httpClient: HttpClient) { }

  submit(query) {
    console.log(query);
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(
      `${this.API_URL}/?flyFrom=${query.location}&to=${query.search}&startdate=${query.from}&enddate=${query.to}&`,
      options)
      .toPromise();
  }
}
