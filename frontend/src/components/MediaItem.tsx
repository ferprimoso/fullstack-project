'use client'
import { useRouter } from 'next/navigation'
import { Album, Artist } from '@/types'
import Image from 'next/image'

interface MediaItemProps {
  data: Album & Artist
}

const MediaItem: React.FC<MediaItemProps> = ({ data }) => {
  const router = useRouter()

  const handleClick = () => {
    if (data.artistId !== null) {
      router.push('/artist/' + data.artistId)
    } else {
      router.push('/albums/' + data.albumId)
    }
  }

  return (
    <div
      onClick={handleClick}
      className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
      "
    >
      <div
        className="
          relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden
        "
      >
        <Image
          fill
          src={data.albumCoverUrl || data.artistCoverUrl}
          alt="MediaItem"
          className={data.artistId && 'rounded-full'}
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">
          {data.albumTitle || data.artistName}
        </p>
        <p className="text-neutral-400 text-sm truncate"></p>
      </div>
    </div>
  )
}

export default MediaItem
