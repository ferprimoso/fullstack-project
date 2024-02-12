import { Album } from '@/types'
import apiKey from '../api'

const getAlbums = async (): Promise<Album[]> => {
  const res = await fetch(apiKey + '/albums')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default getAlbums
