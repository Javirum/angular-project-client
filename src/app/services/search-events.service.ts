import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SearchEventsService {

  private API_URL = environment.apiUrl + '/search';


  constructor(private httpClient: HttpClient) { }

  submit(query) {
    console.log(query);
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}?eventsIn=${query.search}`, options)
      .toPromise();
  }
}


