import { Artist } from '@/types'

const getArtistById = async (artistId: string): Promise<Artist> => {
  const res = await fetch(
    'http://fullstack_project_backend_1:3001/artists/' + artistId,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default getArtistById
