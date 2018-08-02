import { Component, OnInit } from '@angular/core';
import { SearchArtistService } from '../../services/search-artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private searchArtist: SearchArtistService, private router: Router) { }
  feedbackEnabled = false;
  error = null;
  processing = false;
  event: string;

  ngOnInit() {
  }

  submitForm(searchForm) {
    console.log(searchForm);
    this.error = '';
    this.feedbackEnabled = true;
    if (searchForm.valid) {
      this.processing = true;
      this.searchArtist.submit(this.event)
        .then((result) => {
          this.router.navigate(['/search/events']);
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
// (dentro del then), para redireccionar a un paguina donde muestrre los eventos.
