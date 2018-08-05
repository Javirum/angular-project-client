import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchFlightService {

  private API_URL = 'http://localhost:3000/search';

  constructor(private httpClient: HttpClient) { }
}
