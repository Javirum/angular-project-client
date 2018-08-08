import { Component, OnInit } from '@angular/core';
import { SearchEventsService } from '../../services/search-events.service';
import { SearchFlightService } from '../../services/search-flight.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  private flightOut: any;
  private flightBack: any;
  private flightOutUrl: any;
  private flightBackUrl: any;
  private eventUrl: any;
  constructor(private searchEventsService: SearchEventsService, private searchFlights: SearchFlightService) {

    this.flightOut = this.searchEventsService.flightOut;
    this.flightBack = this.searchEventsService.flightBack;
    this.flightOutUrl = this.flightOut.deep_link;

    this.flightBackUrl = this.flightBack.deep_link;

    this.eventUrl = this.searchEventsService.eventData.url;
  }

  ngOnInit() {
  }

}
