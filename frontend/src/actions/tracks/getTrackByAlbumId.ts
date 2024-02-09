import { Track } from '@/types'

const getTracksByAlbumId = async (albumId: string): Promise<Track[]> => {
  const res = await fetch(
    'http://fullstack_project_backend_1:3001/albums/' + albumId + '/tracks/',
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default getTracksByAlbumId
