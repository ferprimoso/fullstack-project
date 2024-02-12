import SearchInput from './components/SearchInput'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { searchByAlbumName, searchByArtistName } from '@/actions/search/search'
import PageContent from '@/components/PageContent'
import PageContentArtist from '@/components/PageContentArtist'

export const revalidate = 0

interface SearchProps {
  searchParams: { name: string }
}

const Search = async ({ searchParams }: SearchProps) => {
  const albums = await searchByAlbumName(searchParams.name)
  const artists = await searchByArtistName(searchParams.name)

  return (
    <SideBar>
      <div
        className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
      >
        <Header className="from-bg-neutral-900">
          <div className="mb-2 flex flex-col gap-y-6">
            <h1 className="text-white text-3xl font-semibold">Buscar</h1>
            <SearchInput />
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
  )
}

export default Search
