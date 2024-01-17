import React from 'react'
import AdminCard from './layout/adminCard'
import MacControllerAnimation from '../../../animations/macController'
import Hr from '../../../utils/graphics/hr/Hr'
import Contributers from './layout/contributers'
import Sections from './layout/sections'
import Banner from './layout/banner'

export default function SideBar() {
  return (
    <div className=' flex flex-col relative min-w-52 justify-between boxShadow h-full w-52 bg-maroon rounded-3xl px-4 py-5'>
      <div>
        <MacControllerAnimation />
        <AdminCard />
        <Hr />
        <Sections />
        <Hr />
        <Contributers />
      </div>
      <Banner />
    </div>
  )
}
