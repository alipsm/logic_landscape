import React, { useState } from 'react'
import AdminCard from './layout/adminCard'
import MacBurgerMenu from './ui/macBurgerMenu'
import Hr from '../../../utils/graphics/hr/Hr'
import Contributers from './layout/contributers'
import Sections from './layout/sections'
import Banner from './layout/banner'

export default function SideBar() {
  const [minimull, setMinimull] = useState(true)
  return (
    <div className={`flex flex-col relative justify-between boxShadow h-full ${minimull ? " w-16 px-2 py-2 rounded-2xl" : "min-w-52 w-52 px-4 py-5 rounded-3xl"} bg-maroon transition-all`}>
      <div>
        <MacBurgerMenu minimull={minimull} setMinimull={setMinimull} />
        <AdminCard minimull={minimull} />
        <Hr />
        <Sections minimull={minimull} />
        <Hr />
        <Contributers minimull={minimull} />
      </div>
      <Banner minimull={minimull} />
    </div>
  )
}
