import { Injectable } from '@angular/core';
import { SpotifyAuthService } from './spotify.service';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { TopArtistResponse, ArtistInfo, UserDetails, CriteriaMap } from '../common';

const baseUrl = `https://api.spotify.com/`;


@Injectable({
  providedIn: 'root'
})
export class SpotifyAPIService {

  private _userDetails: UserDetails = null;
  private _topArtists: ArtistInfo[] = [];

  public selectedItems: Set<string> = new Set();
  /**
   * 
   */
  public criteriaMap: CriteriaMap = {
    acousticness: {
      max: 100,
      min: 0
    },
    energy: {
      max: 100,
      min: 0
    },
    danceability: {
      max: 100,
      min: 0
    },
    valence: {
      max: 100,
      min: 0
    },
    instrumentalness: {
      max: 100,
      min: 0
    }
  };

  constructor(private authService: SpotifyAuthService, private http: HttpClient) {
    this.topArtists.next(this._topArtists);
    this.userDetails.next(this._userDetails);
  }

  private get requestHeader(): { headers: { Authorization: string } } {
    return {
      headers: {
        Authorization: `Bearer ${this.authService.accessToken}`
      }
    };
  }

  public topArtists = new ReplaySubject<ArtistInfo[]>(1);
  public userDetails = new ReplaySubject<UserDetails>(1);

  setCriteriaKey(key: string, value: { min: number, max: number }) {
      this.criteriaMap[key] = value;
  }

  getTopArtists(): void {
    this.http.get<TopArtistResponse>(`${baseUrl}v1/me/top/artists`, this.requestHeader).subscribe((e: TopArtistResponse) => {
      this._topArtists = e.items.map(entry => {
        entry.genres = entry.genres.splice(0, 3);
        return entry;
      });
      this.topArtists.next(this._topArtists);
    });
  }

  getCurrentUser(): void {
    this.http.get<TopArtistResponse>(`${baseUrl}v1/me`, this.requestHeader).subscribe((e: any) => {
      this._userDetails = e.items;
      this.userDetails.next(this._userDetails);
    });
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`${baseUrl}v1/users/${id}`, this.requestHeader);
  }

  getUserPlaylists(id: string): Observable<any> {
    return this.http.get(`${baseUrl}v1/users/${id}/playlists`, this.requestHeader);
  }

  getTracks(id: string): Observable<any> {
    return this.http.get(`${baseUrl}v1/playlists/${id}/tracks`, this.requestHeader);
  }

  getRelatedArtists(artistID: string): Observable<any> {
    return this.http.get(`${baseUrl}/v1/artists/${artistID}/related-artists`, this.requestHeader);
  }

  getArtistAlbums(artistID: string): Observable<any> {
    return this.http.get(`${baseUrl}/v1/artists/${artistID}/albums`, this.requestHeader);
  }

  createPlaylist(artistIDs: string[], criteria: CriteriaMap, playlistName: string) {
    debugger;
    this.http.post('http://localhost:3000/create', { artistIDs, criteria, playlistName }).subscribe((response: any) => {
      console.log('Response:\n', response);
      debugger;
    });
  }
}
