import { Component } from '@angular/core';
import { SpotifyAuthService } from '../services/spotify.service';
import { SpotifyAPIService } from '../services/spotifyapi.service';
import { PlayList, ArtistRef } from '../common';


const userId = '11130072368';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public artists: ArtistRef[] = [];
  public playlists: PlayList[] = [];
  public tracks: any[] = [];

  constructor(private spotifyService: SpotifyAuthService, private apiService: SpotifyAPIService) {
  }

  login() {
    this.spotifyService.login();
  }

  debug() {
    debugger;
  }

  getArtists() {
    this.apiService.getTopArtists().subscribe(data => {
      this.artists = data.items;
    });
  }

  getUser(id: string) {
    this.apiService.getUser(userId).subscribe(data => {
    });
  }

  getUserPlaylists() {
    this.apiService.getUserPlaylists(userId).subscribe(data => {
      this.playlists = data.items;
    });
  }

  getTracks(playlistId: string) {
    this.apiService.getTracks(playlistId).subscribe(data => {
      debugger;
      this.tracks = data;
    });
  }
}
