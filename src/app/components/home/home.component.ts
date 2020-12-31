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

  constructor( private spotify: SpotifyService) {
    this.spotify.getNewReleases()
      .subscribe(data =>  this.newReleases = data);
  }

  ngOnInit(): void {
  }

}
