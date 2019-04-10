import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appCredentials } from './appCredentials';

interface StorageToken {
  state: string;
  token: string;
  expires: Date;
}

interface AppCredentials {
  id: string;
  secret: string;
}

const spotifyUrl = 'https://accounts.spotify.com/';
@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {


  public get accessToken() {
    if (!this._accessToken) {
      const token: StorageToken = JSON.parse(localStorage.getItem('spotify_access_token'));
      this._accessToken = new Date(token.expires).getTime() > new Date().getTime() ? token.token : null;
    }
    return this._accessToken;
  }
  // tslint:disable-next-line:variable-name
  private _accessToken = '';
  private stateToken = '';
  private endpoints = {
    authorize: `${spotifyUrl}authorize`
  };
  private client: AppCredentials = appCredentials;

  public setAccessToken(val: StorageToken) {
    this._accessToken = val.token;
    localStorage.setItem('spotify_access_token', JSON.stringify(val));
  }

  constructor(private http: HttpClient) { }

  login() {
    this.stateToken = parseFloat(Math.random().toFixed(5)).toString(36).substring(7);
    const headers = {
      client_id: this.client.id,
      response_type: 'token',
      redirect_uri: 'http://localhost:4200/profile',
      state: this.stateToken,
      scope: `user-top-read playlist-modify-public`
    };
    const urlParams = Object.keys(headers).map((header) => `${header}=${headers[header]}`).join('&');

    const requestUrl = `${this.endpoints.authorize}?${urlParams}`;
    window.open(requestUrl);
    this.http.get(requestUrl).subscribe((data) => {
      console.log(data);
    });
  }
}
