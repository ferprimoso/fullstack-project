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
  updateData: () => void
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
  updateData: () => {},
})

// Hook
export const useLikedData = () => useContext(LikedDataContext)

// Provider
export const LikedDataProvider: React.FC<LikedDataProps> = ({ children }) => {
  const [albumsLiked, setAlbumsLiked] = useState<Liked[] | undefined>()
  const [artistsLiked, setArtistsLiked] = useState<Liked[] | undefined>()

  useEffect(() => {
    fetchData() // Call the fetchData function when the component mounts
  }, [])

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')

      // If theres no token just return
      if (!token) {
        return
      }

      const albumsLiked = await getAllAlbumsLiked(token as string)
      const artistsLiked = await getAllArtistsLiked(token as string)
      setAlbumsLiked(albumsLiked)
      setArtistsLiked(artistsLiked)
    } catch (error) {
      console.error('Error fetching liked data:', error)
    }
  }

  // Create a liked instance then fetch the data
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

  // Update Data
  const updateData = async () => {
    fetchData()
  }

  return (
    <LikedDataContext.Provider
      value={{
        albumsLiked,
        setAlbumsLiked,
        artistsLiked,
        setArtistsLiked,
        createLiked,
        updateData,
      }}
    >
      {children}
    </LikedDataContext.Provider>
  )
}
