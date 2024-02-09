'use client'

import { Album } from '@/types'
import AlbumCard from './AlbumCard'

interface PageContentProps {
  albums: Album[]
}

const PageContent: React.FC<PageContentProps> = ({ albums }) => {
  if (albums.length === 0) {
    return <div className="mt-4 text-neutral-400">Nenhum album disponivel.</div>
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {albums.map((album) => (
        <AlbumCard key={album.albumId} data={album}></AlbumCard>
      ))}
    </div>
  )
}

export default PageContent
