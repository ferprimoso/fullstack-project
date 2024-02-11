'use client'

import { createLiked } from '@/actions/liked/getLikeds'
import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface LikeButtonProps {
  entityId: string
  entityType: string
}

const LikeButton: React.FC<LikeButtonProps> = ({ entityId, entityType }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)

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
        createLiked({ token, entityType, entityId })
        setIsLiked(!isLiked)
      }}
    >
      <Icon color={isLiked ? '#EC4899' : 'white'} size={36} />
    </button>
  )
}

export default LikeButton
