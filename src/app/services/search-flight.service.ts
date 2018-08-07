import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchFlightService {

  private API_URL = environment.apiUrl + '/search/flights';

  constructor(private httpClient: HttpClient) { }
}
