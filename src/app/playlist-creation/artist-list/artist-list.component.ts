import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SpotifyAPIService } from 'src/app/services/spotifyapi.service';
import { ArtistInfo } from 'src/app/common';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  public artists = new Subject<ArtistInfo[]>();
  public selected = [];
  constructor(public state: SpotifyAPIService) {
    this.state.getTopArtists();
    this.artists = state.topArtists;
  }

  ngOnInit() {
  }

}
