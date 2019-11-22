import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ArtistInfo } from 'src/app/common';
import { SpotifyAPIService } from 'src/app/services/spotifyapi.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  @Input()
  public artist: ArtistInfo;

  public get selected(): boolean {
    // tslint:disable-next-line: no-non-null-assertion
    return this.state.selectedItems.has(this.artist!.id);
  }

  constructor(private state: SpotifyAPIService) { }

  ngOnInit() {
  }

  toggle() {
    if (this.selected) {
      this.state.selectedItems.delete(this.artist.id);
    } else {
      this.state.selectedItems.add(this.artist.id);
    }
  }

}
