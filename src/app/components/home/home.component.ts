import { Component, Input, OnInit, Output } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  @Output() newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService) {
    this.mensajeError = '';
    this.error = false;
    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe(data =>  {
        this.newReleases = data;
        this.loading = false;
        this.error = false;
      }, (err) => {
        this.loading = false;
        console.log(err);
        console.log(err);
        this.mensajeError = `Error ${err.error.error.status}. ${err.error.error.message}`;
        this.error = true;
      });
  }

  ngOnInit(): void {
  }

}
