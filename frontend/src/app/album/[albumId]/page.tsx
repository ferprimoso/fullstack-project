import getAlbumById from '@/actions/albums/getAlbumById'
import getTracksByAlbumId from '@/actions/tracks/getTrackByAlbumId'
import Header from '@/components/Header'
import TrackList from '@/components/TrackList'
import Image from 'next/image'

const AlbumPage = async ({ params }: { params: { albumId: string } }) => {
  const album = await getAlbumById(params.albumId)
  const tracks = await getTracksByAlbumId(params.albumId)

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-x-5 ">
            <div className="relative h-32 w-32 lg:h-60 lg:w-60 ">
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
                {album.albumTitle} • {album.releaseYear} • {8} musicas • 12min
                40s
              </p>
            </div>
          </div>
        </div>
      </Header>
      <TrackList tracks={tracks} />
    </div>
  )
}

export default AlbumPage
