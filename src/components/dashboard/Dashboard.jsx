import React from 'react'
import { Outlet } from 'react-router'
import SideBar from './sideBar/SideBar'

export default function Dashboard({ children }) {
    return (
        <div className='flex justify-between w-full h-full'>
            <Outlet />
            <div></div>
            <SideBar />
        </div>
    )
}
