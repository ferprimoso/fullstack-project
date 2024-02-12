import { Artist } from '@/types'
import apiKey from '../api'

const getArtistById = async (artistId: string): Promise<Artist> => {
  const res = await fetch(apiKey + '/artists/' + artistId)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default getArtistById
