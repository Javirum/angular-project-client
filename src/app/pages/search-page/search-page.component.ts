import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchEventsService } from '../../services/search-events.service';
import { SearchFlightService } from '../../services/search-flight.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  query: string;
  events: any;
  flights: any;
  end: any;
  constructor(private searchEventsService: SearchEventsService, private searchFlights: SearchFlightService, private router: Router) { }


  ngOnInit() {
  }

  submitForm(searchForm) {
    this.error = '';
    this.feedbackEnabled = true;
    if (searchForm.valid) {
      this.processing = true;
      this.searchEventsService.saveCity(searchForm.value);
      this.searchEventsService.saveDate(searchForm.value);
      this.searchEventsService.submit(searchForm.value)
        .then((result: any) => {
          this.events = result.events;
        })
        .catch((err) => {
          this.error = err.error;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

  handleClick(event) {
    this.searchEventsService.saveEvent(event);
    this.router.navigate(['/event']);
  }
}

