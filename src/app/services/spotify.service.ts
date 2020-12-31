import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Servicio spotify listo');
  }

  getQuery(query: string): Observable<any> {
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDkHiIC6mvjzsi8XdVC1BXWbguUGHcxubzezUtx6jRRg4jGaevSduOnJARhNcMNN1kN0xgHgP_9upc5xxA',
    });

    return this.http.get(URL, { headers });
  }



  getNewReleases(): Observable<any[]> {
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => data.albums.items ));
  }

  getArtists(searchText: string): Observable<any[]> {
    return this.getQuery(`search?q=${searchText}&type=artist&limit=15`)
      .pipe(map( (data: any) => data.artists.items ));
  }

  getArtist(id: string): Observable<any[]> {
    return this.getQuery(`artists/${id}`);
  }
}
