'use server'

import { Album, Artist } from '@/types'

const searchByAlbumName = async (name: string): Promise<Album[]> => {
  const res = await fetch(
    'http://fullstack_project_backend_1:3001/albums/search?name=' + name,
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const searchByArtistName = async (name: string): Promise<Artist[]> => {
  const res = await fetch(
    'http://fullstack_project_backend_1:3001/artists/search?name=' + name,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export { searchByAlbumName, searchByArtistName }
