export interface Artist {
  artistId: string
  artistName: string
  artistCoverUrl: string
}

export interface Track {
  trackId: string
  trackTitle: string
  trackDuration: string
  albumId: string
}

export interface Album {
  albumId: string
  albumTitle: string
  releaseYear: number
  albumCoverUrl: string
  artist: Artist
  genreId: string
}

export interface RegisterIn {
  username: string
  email: string
  password: string
}
export interface LoginIn {
  email: string
  password: string
}
export interface AuthInfo {
  email: string
}
