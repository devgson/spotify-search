export interface Album {
  id: string;
  name: string;
  releaseDate: Date;
  url: string;
  genres?: string[];
  popularity?: number;
  tracks?: any;
  artists: Artist[];
  label?: string;
  images: [{ height: string; url: string; width: string }];
}

export interface Artist {
  id: string;
  name: string;
  popularity?: number;
  uri?: string;
  genres?: string[];
  images?: [{ height: string; url: string; width: string }];
  followers?: { total: number };
}

export interface Track {
  id: string;
  name: string;
  popularity: number;
  audio?: string;
  type?: string;
  spotifyUrl?: string;
  album?: Album;
  artists?: Artist[];
  duration?: Object;
  explicit?: Boolean;
}
