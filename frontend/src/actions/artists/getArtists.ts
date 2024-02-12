import { Artist } from '@/types'
import apiKey from '../api'

const getArtists = async (): Promise<Artist[]> => {
  const res = await fetch(apiKey + '/artists')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default getArtists
