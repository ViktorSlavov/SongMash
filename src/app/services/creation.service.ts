import { Injectable } from '@angular/core';
import { SpotifyAPIService } from './spotifyapi.service';
import { CriteriaMap } from '../common';

@Injectable({
  providedIn: 'root'
})
export class CreationService {

  private _selectedArtists: Set<string> = new Set();
  public selectedArtists: string[] = [];
  public criteriaMap: CriteriaMap = {};
  constructor(private spotifyService: SpotifyAPIService) {
  }

  setCriteria(map: CriteriaMap) {
    this.criteriaMap = map;
  }

  addSelectedArtist(artistID: string) {
    this._selectedArtists.add(artistID);
    this.selectedArtists = Array.from(this._selectedArtists);
  }

  removeSelectedArtist(artistID: string) {
    this._selectedArtists.delete(artistID);
    this.selectedArtists = Array.from(this._selectedArtists);
  }
}
