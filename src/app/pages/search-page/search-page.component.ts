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
  constructor(private searchEventsService: SearchEventsService, private searchFlights: SearchFlightService, private router: Router) { }


  ngOnInit() {
  }

  submitForm(searchForm) {
    this.error = '';
    this.feedbackEnabled = true;
    if (searchForm.valid) {
      this.processing = true;
      this.searchEventsService.submit(searchForm.value)
        .then((result) => {
          console.log(result);
          this.events = result[0].events;
          this.flights = result[1].locations;
          // this.router.navigate(['/search/events']);
        })
        .catch((err) => {
          this.error = err.error;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }

    // ANGULAR
    // primero lograr capturar el input en este TS file.
    // desde el ts file, debes llamar el service(eso significa que debemos crealo y importarlo comp private dentro del contructor)
    // debemos ir al service y crear el metodo que nos comunique ocn node para buscarlos eventos.

    // NODE
    // tenemos que ir a node y craear el API endpoint. /events/search
    // dentro de este metodo debemos hacer la query a la api, mandando el nombre del artista y nos va a devolver un archivo json.

    // ANGULAR
    // dentro del ts donde llamamos al service. debemos resolver la promise
    // (dentro del then), para redireccionar a un paguina donde muestrre los eventos
  }
}
