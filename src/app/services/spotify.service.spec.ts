import { TestBed } from '@angular/core/testing';

import { SpotifyAuthService } from './spotify.service';

describe('SpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyAuthService = TestBed.get(SpotifyAuthService);
    expect(service).toBeTruthy();
  });
});
