import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { SpotifyAuthService } from '../services/spotify.service';
import { SpotifyAPIService } from '../services/spotifyapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: SpotifyAuthService, private spotifyApi: SpotifyAPIService) { }

  ngOnInit() {
    // this.http.options('http://localhost:3000/auth').
    this.authService.login();
  }

}
