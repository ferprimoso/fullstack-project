import getAlbumById from '@/actions/albums/getAlbumById'
import getArtistById from '@/actions/artists/getArtistById'
import getTracksByAlbumId from '@/actions/tracks/getTrackByAlbumId'
import Header from '@/components/Header'
import LikeButton from '@/components/LikeButton'
import Sidebar from '@/components/SideBar'
import TrackList from './components/TrackList'
import Image from 'next/image'

export const revalidate = 40

const AlbumPage = async ({ params }: { params: { albumId: string } }) => {
  const album = await getAlbumById(params.albumId)
  const artist = await getArtistById(album.artistId)
  const tracks = await getTracksByAlbumId(params.albumId)

  return (
    <Sidebar>
      <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header>
          <div className="mt-10">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-x-5 ">
              <div className="self-center relative h-32 w-32 lg:h-60 lg:w-60 mb-4 md:mb-0 lg:min-w-60 lg:min-h-60 min-w-32 min-h-32 ">
                <Image
                  className="object-cover "
                  src={album.albumCoverUrl}
                  fill
                  alt="Image"
                />
              </div>

              <div className="flex flex-col gap-y-2 md:mt-0">
                <p className="hidden md:block font-semibold text-sm">Album</p>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                  {album.albumTitle}
                </h1>
                <p className="hidden md:block font-semibold text-sm">
                  {artist.artistName} • {album.releaseYear} • {tracks.length}{' '}
                  musicas
                </p>
                <div className="flex justify-center md:justify-start">
                  <LikeButton entityType={'albums'} entityId={album.albumId} />
                </div>
              </div>
            </div>
          </div>
        </Header>
        <TrackList tracks={tracks} artistName={artist.artistName} />
      </div>
    </Sidebar>
  )
}

export default AlbumPage
