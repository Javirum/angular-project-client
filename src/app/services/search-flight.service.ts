import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchFlightService {

  private API_URL = environment.apiUrl + '/search/flights';

  constructor(private httpClient: HttpClient) { }

  getFlights(fromCity, toCity, date) {
    const dateStr = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    return this.httpClient.get(`https://api.skypicker.com/flights?flyFrom=${fromCity}&to=${toCity}&dateFrom=${dateStr}&dateTo=${dateStr}&partner=picky`)
      .toPromise()
      .then((result) => {
        console.log(result)
      })
      .catch();
  }
}
