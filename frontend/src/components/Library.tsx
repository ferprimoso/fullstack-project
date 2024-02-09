'use client'

import { TbPlaylist } from 'react-icons/tb'

const Library = () => {
  const OnClick = () => {
    // Handle Later
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Sua Biblioteca</p>
        </div>
      </div>
    </div>
  )
}

export default Library
