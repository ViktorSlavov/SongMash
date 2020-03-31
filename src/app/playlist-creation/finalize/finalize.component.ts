import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from 'src/app/services/spotifyapi.service';
import { CriteriaMap } from 'src/app/common';
import { BehaviorSubject } from 'rxjs';
import { mockArtists } from '../artist-list/mockData';

const keyMap = {
  acousticness: {
    min: 'Non-Acoustic',
    max: 'Acoustic'
  },
  danceability: {
    min: 'Still-standin\'',
    max: 'Booty-swingin\''
  },
  energy: {
    min: 'chillin\'',
    max: 'HYPED'
  },
  instrumentalness: {
    min: 'Vocal',
    max: 'Instrumental'
  },
  valence: {
    min: 'Melancholic',
    max: 'Cheerful'
  },
};

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.scss']
})
export class FinalizeComponent implements OnInit {
  public playlistName = '';
  public artists = new BehaviorSubject(mockArtists.map(entry => {
    entry.genres = entry.genres.splice(0, 3);
    return entry;
  }));
  public criteriaMap: CriteriaMap = {};

  constructor(public spotifyAPI: SpotifyAPIService) {
    this.criteriaMap = spotifyAPI.criteriaMap;
  }

  public get criteria(): string[] {
    return Object.keys(this.criteriaMap);
  }

  ngOnInit(): void {
  }

  submit() {
    const artists = Array.from(this.spotifyAPI.selectedItems);
    this.spotifyAPI.createPlaylist(artists, this.criteriaMap, this.playlistName);
  }

  randomizeName(): void {
    const map = this.criteriaMap;
    const keys = Object.keys(map);
    keys.sort((key1: string, key2: string) => {
      const specificity1 = map[key1].max - map[key1].min;
      const specificity2 = map[key2].max - map[key2].min;
      return specificity1 - specificity2;
    });
    this.playlistName = keys.map(key => map[key].max < 50 ? keyMap[key].min : keyMap[key].min).join(', ') + ' Playlist';
  }

}
