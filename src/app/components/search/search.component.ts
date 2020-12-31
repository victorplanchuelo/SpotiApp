import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;
  constructor( private spotify: SpotifyService) {
    this.loading = false;
  }

  search(termino: string): void {
    this.loading = true;
    this.spotify.getArtist(termino)
      .subscribe( (data: any) => {
        setTimeout(() => {
          this.artists = data;
          this.loading = false;
        }, 1000);
      });
  }


}
