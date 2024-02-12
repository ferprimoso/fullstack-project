import { Album } from '@/types'

const getAlbumById = async (albumId: string): Promise<Album> => {
  console.log('hi', albumId)

  const res = await fetch(
    'http://fullstack_project_backend_1:3001/albums/' + albumId,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default getAlbumById
