import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { joinPathParams, joinQueryParams } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private BASE_URL = `https://api.spotify.com/v1/`;
  private ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';

  constructor(private http: HttpClient) { }

  private query(pathParams: string[], queryParams?: {}) {
    let url = this.BASE_URL;
    url = `${url}${joinPathParams(pathParams)}`;
    if (queryParams) {
      url = `${url}?${joinQueryParams(queryParams)}`;
    }
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.ACCESS_TOKEN}`
      })
    };
    return this.http.get(url, options);
  }

  search(queryParams: { q: string, type: string }) {
    return this.query(['search'], queryParams);
  }

  getAlbum(albumId) {
    return this.query(['albums', albumId]);
  }

  getTrack(trackId) {
    return this.query(['tracks', trackId]);
  }
}
