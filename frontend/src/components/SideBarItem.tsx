import Link from 'next/link'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface SideBarItemProps {
  icon: IconType
  label: string
  active?: boolean
  href: string
}

const SideBarItem = ({ icon: Icon, label, active, href }: SideBarItemProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        'flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white trasition text-neutral-400 py-1',

        active && 'text-white',
      )}
    >
      <Icon size={26} />
      <p className="truncate">{label}</p>
    </Link>
  )
}

export default SideBarItem
