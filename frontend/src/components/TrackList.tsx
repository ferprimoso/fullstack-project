'use client'

import { Track } from '@/types'
import { FiClock } from 'react-icons/fi'

// getServerSideProps

interface PageContentProps {
  tracks: Track[]
}

const PageContent: React.FC<PageContentProps> = ({ tracks }) => {
  if (tracks.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">Nenhuma Musica disponivel.</div>
    )
  }
  return (
    <div className="mt-2 mb-7 px-6">
      <div className="flex justify-between items-center border-b mb-4 border-neutral-500 border-opacity-40 text-neutral-400">
        <div># Titulo</div>
        <div className="pr-5">
          <FiClock size={16} className="text-neutral-400" />
        </div>
      </div>
      <div className="flex h-full">
        <div className="flex flex-col gap-y-4 w-full">
          {tracks.map((track, index) => (
            <div key={track.trackId} className="flex justify-between">
              <div className="flex items-center">
                {index + 1}
                {/* <IoMdPlay className="text-white" /> */}
                <div className="flex flex-col">
                  <p>{track.trackTitle}</p>
                  <p className="text-neutral-400">Phil Collins</p>
                </div>
              </div>
              <div className="text-neutral-500 flex justify-center items-center pr-2">
                <p>{track.trackDuration.slice(3)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageContent
