/* eslint-disable prettier/prettier */
'use server'
import { Liked } from '@/types'
import apiKey from '../api'

interface createLikedProps {
  entityType: string
  entityId: string
  token: string | null
}

const createLikedApi = async ({
  token,
  entityType,
  entityId,
}: createLikedProps): Promise<void> => {
  const res = await fetch(
    apiKey + '/likes/' +
    entityType +
    '/' +
    entityId,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
}

const getAllAlbumsLiked = async (token: string): Promise<Liked[]> => {
  const res = await fetch(
    apiKey + '/likes/albums',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (!res.ok) {
    throw res
  }

  return res.json()
}

const getAllArtistsLiked = async (token: string): Promise<Liked[]> => {
  const res = await fetch(
    apiKey + '/likes/artists',
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

export { getAllAlbumsLiked, getAllArtistsLiked, createLikedApi }
