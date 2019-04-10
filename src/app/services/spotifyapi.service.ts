import { Injectable } from '@angular/core';
import { SpotifyAuthService } from './spotify.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = `https://api.spotify.com/`;

@Injectable({
  providedIn: 'root'
})
export class SpotifyAPIService {

  constructor(private authService: SpotifyAuthService, private http: HttpClient) {
  }

  getTopArtists(): Observable<any> {
    return this.http.get(`${baseUrl}v1/me/top/artists?time_range=long_term`, {
      headers: {
        Authorization: `Bearer ${this.authService.accessToken}`
      }
    });
  }
  getUser(id: string): Observable<any> {
    return this.http.get(`${baseUrl}v1/users/${id}`, {
      headers: {
        Authorization: `Bearer ${this.authService.accessToken}`
      }
    });
  }

  getUserPlaylists(id: string): Observable<any> {
    return this.http.get(`${baseUrl}v1/users/${id}/playlists`, {
      headers: {
        Authorization: `Bearer ${this.authService.accessToken}`
      }
    });
  }

  getTracks(id: string): Observable<any> {
    return this.http.get(`${baseUrl}v1/playlists/${id}/tracks`, {
      headers: {
        Authorization: `Bearer ${this.authService.accessToken}`
      }
    });
  }

  getRelatedArtists(artistID: string): Observable<any> {
    return this.http.get(`${baseUrl}/v1/artists/${artistID}/related-artists`, {
      headers: {
        Authorization: `Bearer ${this.authService.accessToken}`
      }
    });
  }

  getArtistAlbums(artistID: string): Observable<any> {
    return this.http.get(`${baseUrl}/v1/artists/${artistID}/albums`, {
      headers: {
        Authorization: `Bearer ${this.authService.accessToken}`
      }
    });
  }
}
