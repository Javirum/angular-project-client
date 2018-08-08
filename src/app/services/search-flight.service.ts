import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchFlightService {

  private API_URL = environment.apiUrl + '/search/flights';

  constructor(private httpClient: HttpClient, private searchFlights: SearchFlightService) { }

  getFlights(fromCity, toCity, date) {
    const dateStr = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    const url = `https://api.skypicker.com/flights?flyFrom=${fromCity}&to=${toCity}&dateFrom=${dateStr}&dateTo=${dateStr}&partner=picky`;
    return this.httpClient.get(url)
      .toPromise()
      .then((results: any) => {
        results.data = results.data.map((item) => {
          item.departure = new Date(item.dTime * 1000);
          return item;
        });
        return results;
      })
      .catch();
  }
}
