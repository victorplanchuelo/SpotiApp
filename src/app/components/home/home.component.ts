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

  constructor( private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe(data =>  {
        setTimeout(() => {
          this.newReleases = data;
          this.loading = false;
        }, 1000);
      });
  }

  ngOnInit(): void {
  }

}
