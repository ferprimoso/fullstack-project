'use client'

import {
  createLikedApi,
  getAllAlbumsLiked,
  getAllArtistsLiked,
} from '@/actions/liked/getLikeds'
import { Liked } from '@/types'
import React, { createContext, useState, useContext, useEffect } from 'react'

// CONTEXT for the Library Liked Albums and Artists

// Define the context
type LikedContextType = {
  albumsLiked: Liked[] | undefined
  setAlbumsLiked: React.Dispatch<React.SetStateAction<Liked[] | undefined>>
  artistsLiked: Liked[] | undefined
  setArtistsLiked: React.Dispatch<React.SetStateAction<Liked[] | undefined>>
  createLiked: (token: string, entityId: string, entitytype: string) => void
}

// Children Props
interface LikedDataProps {
  children: React.ReactNode
}

const LikedDataContext = createContext<LikedContextType>({
  albumsLiked: undefined,
  setAlbumsLiked: () => {},
  artistsLiked: undefined,
  setArtistsLiked: () => {},
  createLiked: () => {},
})

// Hook
export const useLikedData = () => useContext(LikedDataContext)

// Provider
export const LikedDataProvider: React.FC<LikedDataProps> = ({ children }) => {
  const [albumsLiked, setAlbumsLiked] = useState<Liked[] | undefined>()
  const [artistsLiked, setArtistsLiked] = useState<Liked[] | undefined>()

  useEffect(() => {
    fetchData() // Call the fetchData function when the component mounts
  }, []) // Empty dependency array to ensure the effect runs only once on mount

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')

      const albumsLiked = await getAllAlbumsLiked(token as string)
      const artistsLiked = await getAllArtistsLiked(token as string)
      setAlbumsLiked(albumsLiked)
      setArtistsLiked(artistsLiked)
    } catch (error) {
      console.error('Error fetching liked data:', error)
      // You can handle errors here, for example, set state to undefined or show an error message.
    }
  }

  const createLiked = async (
    token: string,
    entityType: string,
    entityId: string,
  ) => {
    try {
      createLikedApi({ token, entityType, entityId })
      fetchData()
    } catch (error) {
      console.error('Error creating like:', error)
    }
  }

  return (
    <LikedDataContext.Provider
      value={{
        albumsLiked,
        setAlbumsLiked,
        artistsLiked,
        setArtistsLiked,
        createLiked,
      }}
    >
      {children}
    </LikedDataContext.Provider>
  )
}
