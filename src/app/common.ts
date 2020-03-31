export interface PlayList extends NamedRef {
  collaborative: boolean;
  external_urls: { [key: string]: string }[];
  images: Image[];
  name: string;
  owner: UserRef;
  primary_color: any;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: 'playlist';
}

interface ImageRef {
  width: number;
  height: number;
  url: string;
}

export interface Track {
  duration_ms: number;
  key: number;
  mode: number;
  time_signature: number;
  acousticness: number;
  danceability: number;
  energy: number;
  instrumentalness: number;
  liveness: number;
  loudness: number;
  speechiness: number;
  valence: number;
  tempo: number;
  id: string;
  uri: string;
  track_href: string;
  analysis_url: string;
  type: string;
}

export interface Image {
  height: number;
  url: string;
  width: string;
}

export interface NamedRef {
  href: string;
  id: string;
  type: any;
  uri?: string;
}

export interface UserRef extends NamedRef {
  display_name: string;
  external_urls: { [key: string]: string }[];
  type: 'user';
}

export interface ArtistRef extends NamedRef {
  tracks: any[];
  images: any[];
}

export enum HexagonShapeFormations {
  PYRAMID = 'PYRAMID',
  FLOWER = 'FLOWER'
}
export interface ArtistInfo {
  external_urls: {
    spotify: string
  };
  followers: {
    href: string,
    total: number
  };
  genres: string[];
  href: string;
  id: string;
  images: ImageRef[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface TopArtistResponse {
  items: ArtistInfo[];
  next: string;
  previous: string;
  total: 50;
  limit: 20;
  href: string;
}

export interface UserDetails {
  country: string;
  display_name: string;
  email: string;
  external_urls: {
    spotify?: string
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: ImageRef[];
  product: string;
  type: string;
  uri: string;
}

export interface CriteriaMap {
  [key: string]: {
    min: number;
    max: number;
  };
}
