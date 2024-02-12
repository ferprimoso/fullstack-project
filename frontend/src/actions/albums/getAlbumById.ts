import { Album } from '@/types'
import apiKey from '../api'

const getAlbumById = async (albumId: string): Promise<Album> => {
  const res = await fetch(apiKey + '/albums/' + albumId)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default getAlbumById
