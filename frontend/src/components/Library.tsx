'use client'

/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import { TbPlaylist } from 'react-icons/tb'
import { getAllAlbumsLiked, getAllArtistsLiked } from '@/actions/liked/getLikeds'
import { useAuth } from '@/providers/AuthContext'
import { Album, Artist, Liked } from '@/types'
import MediaItem from './MediaItem'

const Library = () => {
  // Tabs state logic
  const tabs = ['Artistas', 'Albums']
  const [activeTab, setActiveTab] = useState('Artistas')

  // Data Liked states
  const [albumsLiked, setAlbumsLiked] = useState<Liked[] | undefined>()
  const [artistsLiked, setArtistsLiked] = useState<Liked[] | undefined>()


  // User Context
  const { user } = useAuth()


  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem('token')
        console.log(token)
        // Fetch albums and artist Liked when user is logged in
        const albumsLiked = await getAllAlbumsLiked(token as string)
        const artistsLiked = await getAllArtistsLiked(token as string)
        setAlbumsLiked(albumsLiked);
        setArtistsLiked(artistsLiked);
      } catch (err) {
        console.log(err)
      }
    };
    getData();
  }, []);


  // const OnClick = () => {
  //   // Handle Later
  // }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Sua Biblioteca</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${activeTab === tab
                ? 'border-white text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200 hover:border-gray-300'
                } flex-1 flex items-center justify-center py-4 px-1 border-b-2 font-medium text-sm focus:outline-none`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {user &&
            tabs.map((tab) => (
              <div
                key={tab}
                className={`${activeTab === tab ? 'block' : 'hidden'}`}
              >
                {tab === 'Albums' && albumsLiked?.map((liked) => <MediaItem key={liked.albumId} data={liked.album as Artist & Album} />)}
                {tab === 'Artistas' && artistsLiked?.map((liked) => <MediaItem key={liked.artistId} data={liked.artist as Artist & Album} />)}
              </div>
            ))
          }
          {!user &&
            <p className='text-2xl text-neutral-400'>Faça login para acessar sua biblioteca</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Library
