import { Track } from '@/types'
import apiKey from '../api'

const getTracksByAlbumId = async (albumId: string): Promise<Track[]> => {
  const res = await fetch(apiKey + '/albums/' + albumId + '/tracks')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default getTracksByAlbumId
