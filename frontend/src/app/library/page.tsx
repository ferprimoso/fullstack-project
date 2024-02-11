'use client'

import Header from '@/components/Header'
import Library from '@/components/Library'
import SideBar from '@/components/SideBar'

const LibraryPage = () => {
  return (
    <SideBar>
      <div className="flex flex-col bg-neutral-800 h-full">
        <Header className="from-bg-neutral-900">
          <></>
        </Header>
        <Library />
      </div>
    </SideBar>
  )
}

export default LibraryPage
