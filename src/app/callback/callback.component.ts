import { Component, OnInit } from '@angular/core';
import { SpotifyAuthService } from '../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private authService: SpotifyAuthService, private router: Router) { }

  ngOnInit() {
    this.authService.handleUrl(window.location.href);
    this.router.navigate(['profile']);
  }

}
