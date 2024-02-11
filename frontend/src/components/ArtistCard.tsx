'use client'
import Image from 'next/image'
import { Artist } from '@/types'
import PlayButton from './PlayButton'
import { useRouter } from 'next/navigation'

interface AlbumCardProps {
  data: Artist
}

const AlbumCard: React.FC<AlbumCardProps> = ({ data }) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push('/artist/' + data.artistId)}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-full overflow-hidden">
        <Image
          className="object-cover"
          src={data.artistCoverUrl}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="truncate font-semibold w-full">{data.artistName}</p>
        <p className="text-sm text-neutral-400 w-full truncate pb-4">Artist</p>
        <div className="absolute bottom-24 right-5">
          <PlayButton />
        </div>
      </div>
    </div>
  )
}

export default AlbumCard
