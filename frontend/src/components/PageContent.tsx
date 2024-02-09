'use client'

import { Album } from '@/types'

import AlbumCard from './AlbumCard'

interface PageContentProps {
  items: Album[]
}

const PageContent: React.FC<PageContentProps> = ({ items }) => {
  if (items.length === 0) {
    return <div className="mt-4 text-neutral-400">Nenhum album disponivel.</div>
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {items.map((item) => (
        <AlbumCard key={item.albumId} data={item}></AlbumCard>
      ))}
    </div>
  )
}

export default PageContent
