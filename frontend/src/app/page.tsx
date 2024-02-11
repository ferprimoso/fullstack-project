import getAlbums from '@/actions/getAlbums'
import getArtists from '@/actions/getArtists'
import BottomNavigation from '@/components/BottomNavigation'
import Header from '@/components/Header'
import PageContent from '@/components/PageContent'
import PageContentArtist from '@/components/PageContentArtist'
import SideBar from '@/components/SideBar'

export const revalidate = 0 // revalidate at most every hour

export default async function Home() {
  const albums = await getAlbums()
  const artists = await getArtists()

  return (
    <>
      <SideBar>
        <div className="bg-neutral-900 md:rounded-lg h-full w-full overflow-hidden overflow-y-auto">
          <Header>
            <div className="mb-2">
              <h1 className="text-white text-3xl font-semibold">
                Bem-vindo de volta
              </h1>
            </div>
          </Header>
          <div className="mt-2 mb-7 px-6">
            <div className="flex justify-between items-center">
              <h1 className="text-white text-2xl font-semibold">Albums</h1>
            </div>
            <PageContent items={albums} />
          </div>
          <div className="mt-2 mb-7 px-6">
            <div className="flex justify-between items-center">
              <h1 className="text-white text-2xl font-semibold">Artists</h1>
            </div>
            <PageContentArtist items={artists} />
          </div>
        </div>
      </SideBar>
      <BottomNavigation />
    </>
  )
}
