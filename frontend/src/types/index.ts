export interface Artist {
  artistId: number
  artistName: string
  artistCoverUrl: string
}

export interface Album {
  albumId: number
  albumTitle: string
  releaseYear: number
  albumCoverUrl: string
  artist: Artist
  genreId: number
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
