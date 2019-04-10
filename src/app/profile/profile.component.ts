import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyAuthService } from '../services/spotify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router, private spotifyService: SpotifyAuthService) { }

  ngAfterViewInit() {
    const currentUrl = window.location.href;
    const token = currentUrl.split('token=')[1].split('&token_type')[0];
    const state = currentUrl.split('state=')[1];
    let expires = parseInt(currentUrl.split('expires_in=')[1].split('&state')[0], 10);
    const expireDate = new Date();
    expires = expireDate.setSeconds(expireDate.getSeconds() + expires);
    this.spotifyService.setAccessToken({
      token, state, expires: expireDate
    });
  }

}
