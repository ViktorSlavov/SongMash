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
