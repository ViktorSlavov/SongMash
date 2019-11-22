import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appCredentials } from './appCredentials';
import { take } from 'rxjs/operators';

interface StorageToken {
  state: string;
  token: string;
  expires: Date;
}

interface SpotifyToken {
  token: string;
  refreshToken: string;
}

interface AppCredentials {
  id: string;
  secret: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  public get accessToken() {
    if (!this._accessToken) {
      const token: StorageToken = JSON.parse(localStorage.getItem('spotify_access_token'));
      this._accessToken = token.token;
    }
    return this._accessToken;
  }
  // tslint:disable-next-line:variable-name
  private _accessToken = '';
  private stateToken = '';
  private client: AppCredentials = appCredentials;

  public setAccessToken(val: SpotifyToken) {
    this._accessToken = val.token;
    localStorage.setItem('spotify_access_token', JSON.stringify(val));
  }

  constructor(private http: HttpClient) { }

  handleUrl(url: string) {
    const queryParams = url.split('access_token=')[1];
    const refreshToken = queryParams.split('&')[1].split('refresh_token=')[1];
    const token = queryParams.split('&')[0];
    this.setAccessToken({
      token,
      refreshToken
    });
  }

  login() {
    this.http.get('http://localhost:3000/login').pipe(take(1)).subscribe((e: { url: string, state: string }) => {
      document.cookie = encodeURIComponent('spotify_auth_state') + '=' + encodeURIComponent(e.state) + ';sameSite=NONE';
      window.location.href = e.url;
    });
  }
}
