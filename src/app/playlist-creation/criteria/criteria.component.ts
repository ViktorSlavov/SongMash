import { Component, OnInit } from '@angular/core';
import { CriteriaMap } from 'src/app/common';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  public criteria = {
    acousticness: 0,
    danceability: 0,
    energy: 0,
    instrumentalness: 0,
    valence: 0,
  };

  public criteriaMap: CriteriaMap = {
    acousticness: {
      high: 'spellcheck',
      low: 'text_rotate_vertical'
    },
    energy: {
      high: 'whatshot',
      low: 'nights_stay'
    },
    danceability: {
      high: 'sports_kabaddi',
      low: 'pregnant_woman'
    },
    valence: {
      high: 'wb_sunny',
      low: 'wb_cloudy'
    },
    instrumentalness: {
      high: 'voice_over_off',
      low: 'record_voice_over'
    }
  };

  public get keys(): string[] {
    return Object.keys(this.criteria);
  }

  constructor() { }

  ngOnInit() {
  }

}
