import { Component } from '@angular/core';
import { SpotifyAuthService } from '../services/spotify.service';
import { SpotifyAPIService } from '../services/spotifyapi.service';
import { PlayList, ArtistRef, HexagonShapeFormations, ArtistInfo } from '../common';


const userId = '11130072368';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public userIsLogged = false;
  public SHAPES = HexagonShapeFormations;
  public artists: ArtistInfo[] = [];
  public playlists: PlayList[] = [];
  public tracks: any[] = [];
  public items: { initial: string; side: number, color: string }[] = [{
    initial: 'M',
    side: 80,
    color: '#fffc02'
  }, {
    initial: 'E',
    side: 80,
    color: '#fffc02'
  }, {
    initial: 'M',
    side: 80,
    color: '#fffc02'
  }, {
    initial: 'E',
    side: 80,
    color: '#fffc02'
  }, {
    initial: 'N',
    side: 80,
    color: '#fffc02'
  },  {
    initial: 'C',
    side: 80,
    color: '#fffc02'
  },  {
    initial: 'A',
    side: 80,
    color: '#fffc02'
  }];

  constructor(private spotifyService: SpotifyAuthService, private apiService: SpotifyAPIService) {
  }

  login() {
    this.spotifyService.login();
  }

  debug() {
  }

  getArtists() {
    this.apiService.getTopArtists();
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
      this.tracks = data;
    });
  }
}
