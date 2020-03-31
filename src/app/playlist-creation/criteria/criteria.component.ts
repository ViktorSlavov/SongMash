import { Component, OnInit } from '@angular/core';
import { ISliderValueChangeEventArgs, IRangeSliderValue, IgxSliderType } from 'igniteui-angular';
import { SpotifyAPIService } from 'src/app/services/spotifyapi.service';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  public sliderType = IgxSliderType;

  public criteria = {
    acousticness: 0,
    danceability: 0,
    energy: 0,
    instrumentalness: 0,
    valence: 0,
  };

  public criteriaMap = {
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

  constructor(private spotifyApi: SpotifyAPIService ) { }

  ngOnInit() {
  }

  handleChange(key: string, event: ISliderValueChangeEventArgs) {
    const currentVal = event.value as IRangeSliderValue;
    this.spotifyApi.setCriteriaKey(key, { max: currentVal.upper, min: currentVal.lower });
  }

}
