import { IoMdPlay } from 'react-icons/io'

const PlayButton = () => {
  return (
    <button className="transition ease-in duration-200 opacity-0 rounded-full flex items-center bg-pink-500 p-3 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
      <IoMdPlay className="text-black" size={26} />
    </button>
  )
}

export default PlayButton
