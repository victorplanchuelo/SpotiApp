import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Servicio spotify listo');
  }



  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBA_637luuYi0zakGarWFjAK3sxbMLAVy8D7yNEsEurS4-bfhyIizQJQGryQ3rR0kBQDbHl8cTxaaui3Og',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtist(searchText: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBA_637luuYi0zakGarWFjAK3sxbMLAVy8D7yNEsEurS4-bfhyIizQJQGryQ3rR0kBQDbHl8cTxaaui3Og',
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${searchText}&type=artist&limit=15`, {headers});
  }
}
