import { Component, OnInit } from '@angular/core';
import { SearchEventsService } from '../../services/search-events.service';
import { SearchFlightService } from '../../services/search-flight.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  event: any;
  eventCity: any;
  eventDate: any;
  fromCity: any;
  toCity: any;
  startDate: any;
  endDate: any;
  loaded: any;
  flightsOut: any;
  flightsBack: any;
  flightOutPicked: boolean;


  constructor(private eventService: SearchEventsService, private flightService: SearchFlightService) {
    this.event = this.eventService.getSavedEvent();
    this.eventCity = this.eventService.getSavedCity();
    this.eventDate = this.eventService.getSavedDate();
    this.toCity = this.eventCity.search;
    this.startDate = this.eventService.getFlightOutDate();
    this.endDate = this.eventService.getFlightBackDate();


    // this.fromCity = needs to be set from user. For now its hardecoded;

    console.log(this.event);
    console.log(this.eventCity);
    this.flightService.getFlights('barcelona', this.toCity, this.startDate)
      .then((resultsOut: any) => {
        console.log(resultsOut);
        this.flightService.getFlights('barcelona', this.toCity, this.endDate)
          .then((resultsBack: any) => {
            console.log(resultsBack);
            this.loaded = true;
            this.flightsOut = resultsOut.data;
            this.flightsBack = resultsBack.data;
          });
      })
      .catch(error => console.log(error));
  }

  selectFlightOut(flight) {
    this.eventService.saveFlightOut(flight);
    this.flightOutPicked = true;

  }
  ngOnInit() {

  }

}
