import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { TbPlaylist } from 'react-icons/tb'

const BottomNavigation = () => {
  return (
    <div
      className="fixed  bottom-0 left-0  right-0 w-full md:hidden gap-x-2 bg-black text-neutral-400 
"
    >
      <div className="z-10">
        <div className="flex h-20 justify-around items-center ">
          <button className="flex flex-col items-center gap-1 flex-1">
            <HiHome size={24} />
            <span className="text-xs">Início</span>
          </button>
          <button className="flex flex-col items-center gap-1 flex-1">
            <BiSearch size={24} />
            <span className="text-xs">Buscar</span>
          </button>
          <button className="flex flex-col items-center gap-1 flex-1">
            <TbPlaylist size={24} />
            <span className="text-xs">Sua Biblioteca</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BottomNavigation
