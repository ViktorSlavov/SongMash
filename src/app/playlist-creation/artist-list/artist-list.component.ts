import { Component, OnInit } from '@angular/core';
import { mockArtists } from './mockData';
import { BehaviorSubject } from 'rxjs';
import { SpotifyAPIService } from 'src/app/services/spotifyapi.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  public artists = new BehaviorSubject(mockArtists.map(entry => {
    entry.genres = entry.genres.splice(0, 3);
    return entry;
  }));
  public selected = [];
  constructor(public state: SpotifyAPIService) { }

  ngOnInit() {
  }

}
