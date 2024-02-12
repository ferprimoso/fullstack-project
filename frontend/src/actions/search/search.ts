'use server'

import { Album, Artist } from '@/types'
import apiKey from '../api'

const searchByAlbumName = async (name: string): Promise<Album[]> => {
  const res = await fetch(apiKey + '/albums/search?name=' + name)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const searchByArtistName = async (name: string): Promise<Artist[]> => {
  const res = await fetch(apiKey + '/artists/search?name=' + name)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export { searchByAlbumName, searchByArtistName }
