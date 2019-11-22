import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyAuthService } from '../services/spotify.service';
import { SpotifyAPIService } from '../services/spotifyapi.service';
import { ArtistInfo } from '../common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {

  public artists: ArtistInfo[];
  public artistHeight = 80;
  constructor(private authService: SpotifyAuthService, public spotifyApi: SpotifyAPIService) { }

  ngAfterViewInit() {
    this.spotifyApi.getTopArtists();
    this.spotifyApi.getCurrentUser();
  }

}
