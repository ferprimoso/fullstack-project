'use client'

import { useLikedData } from '@/providers/LikedDataContext'
import { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface LikeButtonProps {
  entityId: string
  entityType: string
}

const LikeButton: React.FC<LikeButtonProps> = ({ entityId, entityType }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  // Data Liked Context
  const { albumsLiked, artistsLiked, createLiked } = useLikedData()

  // See if is already Liked
  useEffect(() => {
    if (
      entityType === 'artists' &&
      artistsLiked?.some((liked) => liked.artistId === entityId)
    ) {
      setIsLiked(true)
    } else if (
      entityType === 'albums' &&
      albumsLiked?.some((liked) => liked.albumId === entityId)
    ) {
      setIsLiked(true)
    } else {
      setIsLiked(false)
    }
  }, [albumsLiked, artistsLiked, entityId, entityType])

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart

  return (
    <button
      className="
        cursor-pointer 
        hover:opacity-75 
        transition
      "
      onClick={() => {
        const token = localStorage.getItem('token')
        createLiked(token as string, entityType, entityId)
      }}
    >
      <Icon color={isLiked ? '#EC4899' : 'white'} size={36} />
    </button>
  )
}

export default LikeButton
