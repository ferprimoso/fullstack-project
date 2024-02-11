import { Album, Artist, Liked } from '@/types'

interface createLikedProps {
  entityType: string
  entityId: string
}

const createLiked = async ({
  entityType,
  entityId,
}: createLikedProps): Promise<Liked[]> => {
  const res = await fetch(
    'http://fullstack_project_backend_1:3001/likes/' +
    entityType +
    '/' +
    entityId,
    {
      method: 'POST',
    },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const getAllAlbumsLiked = async (token: string): Promise<Liked[]> => {
  const res = await fetch(
    'http://fullstack_project_backend_1:3001/likes/albums',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  console.log(res)

  if (!res.ok) {
    console.log(res)
    throw new Error(res)
  }

  return res.json()
}

const getAllArtistsLiked = async (token: string): Promise<Liked[]> => {
  const res = await fetch(
    'http://fullstack_project_backend_1:3001/likes/artists',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export { getAllAlbumsLiked, getAllArtistsLiked, createLiked }
