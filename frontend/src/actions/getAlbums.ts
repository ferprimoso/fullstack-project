import { Album } from '@/types'

const getAlbums = async (): Promise<Album[]> => {
  const res = await fetch('http://fullstack_project_backend_1:3001/albums')

  return res.json()
}

export default getAlbums
