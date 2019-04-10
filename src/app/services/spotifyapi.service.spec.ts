import { TestBed } from '@angular/core/testing';

import { SpotifyAPIService } from './spotifyapi.service';

describe('SpotifyapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyAPIService = TestBed.get(SpotifyAPIService);
    expect(service).toBeTruthy();
  });
});
