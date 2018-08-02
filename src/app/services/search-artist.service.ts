import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchArtistService {

  private user: any;
  // private userChange: Subject<any> = new Subject();
  private API_URL = 'http://localhost:3000/auth';


  private baseUrl = 'http://localhost:3000/auth';
  constructor(private httpClient: HttpClient) {
  }
}
