'use client'
import Image from 'next/image'
import { Album } from '@/types'

interface AlbumCardProps {
  data: Album
  onClick: (id: number) => void
}

const AlbumCard: React.FC<AlbumCardProps> = ({ data, onClick }) => {
  return (
    <div
      onClick={() => onClick(data.albumId)}
      className="relative group flex flex-col items-center justify-center rounde-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={data.albumCoverUrl}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full p-4 gap-y-1">
        <p className="truncate font-semibold w-full">{data.albumTitle}</p>
      </div>
    </div>
  )
}

export default AlbumCard
