import getAlbums from '@/actions/albums/getAlbums'
import getArtistById from '@/actions/artists/getArtistById'
import Header from '@/components/Header'
import LikeButton from '@/components/LikeButton'
import PageContent from '@/components/PageContent'
import Sidebar from '@/components/SideBar'
import Image from 'next/image'

export const revalidate = 0

const ArtistPage = async ({ params }: { params: { artistId: string } }) => {
  const artist = await getArtistById(params.artistId)

  const albums = await getAlbums()
  const artistAlbums = albums.filter(
    (album) => album.artist.artistId.toString() === params.artistId,
  )

  return (
    <Sidebar>
      <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header>
          <div className="mt-10">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-x-5 ">
              <div className="relative h-32 w-32 lg:h-60 lg:w-60 mb-4 md:mb-0">
                <Image
                  className="object-cover rounded-full"
                  src={artist.artistCoverUrl}
                  fill
                  alt="Image"
                />
              </div>

              <div className="flex flex-col gap-y-2 md:mt-0">
                <p className="hidden md:block font-semibold text-sm">Artist</p>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                  {artist.artistName}
                </h1>

                <div className="flex justify-center md:justify-start">
                  <LikeButton
                    entityType={'artists'}
                    entityId={artist.artistId}
                  />
                </div>
              </div>
            </div>
          </div>
        </Header>
        <div className="mt-2 mb-7 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-semibold">Albums</h1>
          </div>
          <PageContent items={artistAlbums} />
        </div>
      </div>
    </Sidebar>
  )
}

export default ArtistPage
