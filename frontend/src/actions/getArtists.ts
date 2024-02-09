import { Artist } from '@/types'

const getArtists = async (): Promise<Artist[]> => {
  const res = await fetch('http://fullstack_project_backend_1:3001/artists')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default getArtists
