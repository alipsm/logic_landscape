import React from 'react'
import { Outlet } from 'react-router'
import SideBar from './sideBar/SideBar'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export default function Dashboard({ children }) {
    const { pathname } = useLocation()
    return (
        <div className='flex justify-between w-full h-full'>
            <motion.div
                key={pathname}
                initial={{ x: -20, opacity: [1,0] }}
                animate={{ x: 0, opacity: [0,1] }}
                transition={{ duration: 1 , delay:0.2 }}
                className='relative w-full mr-5 bg-[#ffffffcc] rounded-3xl py-5 px-8'
            >
                <Outlet />
            </motion.div>
            <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: .6 }}
            >
                <SideBar />
            </motion.div>
        </div>
    )
}
