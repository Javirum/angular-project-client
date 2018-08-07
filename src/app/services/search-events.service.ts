import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

const ONE_DAY = 24 * 60 * 60 * 1000;

@Injectable({
  providedIn: 'root'
})
export class SearchEventsService {

  private API_URL = environment.apiUrl + '/search';
  public eventData: any;
  public eventCity: any;
  public eventDate: any;

  constructor(private httpClient: HttpClient) { }

  submit(query) {
    console.log(query);
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}?eventsIn=${query.search}`, options)
      .toPromise();
  }

  saveEvent(event) {
    event.start.date = new Date(event.start.local);
    event.end.date = new Date(event.end.local);
    this.eventData = event;
  }

  getSavedEvent() {
    return this.eventData;
  }

  saveCity(eventCity) {
    this.eventCity = eventCity;
  }

  getSavedCity() {
    return this.eventCity;
  }

  saveDate(eventDate) {
    this.eventDate = eventDate;
  }

  getSavedDate() {
    this.eventDate = this.eventDate;
  }

  getFlightOutDate(xDaysBefore = 1) {
    const dayBefore = this.eventData.start.date - ONE_DAY * xDaysBefore;
    return new Date(dayBefore);
  }

  getFlightBackDate(xDaysAfter = 1) {
    const dayBefore = this.eventData.end.date + ONE_DAY * xDaysAfter;
    return new Date(dayBefore);
  }
}


