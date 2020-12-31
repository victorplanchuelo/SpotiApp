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
      Authorization: 'Bearer QDHqkWd0DVIiX9vucqIsCXrJsVyKbiFLdhuabHmo6lKH-vWPqKopYOTImNdgrf1UEVidWZVGSOoPMUwUTE',
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

  getTopTracks(id: string): Observable<any[]> {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map( (data: any) => data.tracks ));
  }
}
