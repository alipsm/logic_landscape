import React from 'react'
import { Outlet } from 'react-router'
import SideBar from './sideBar/SideBar'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import PageTitle from '../../shared/pageTitle'

export default function Dashboard({ children }) {
    const { pathname } = useLocation()
    const getSubdirectory = pathname.split("/").slice(-1)[0]
    return (
        <div className='flex justify-between w-full h-full relative'>
            <div className='relative w-full mr-5 rounded-3xl  bg-[#ffffffcc] overflow-hidden'>

                <motion.div
                    key={getSubdirectory}
                    initial={{ x: -20, opacity: [1, 0] }}
                    animate={{ x: 0, opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className=' relative w-full h-full py-5 px-8  overflow-auto '
                >
                    <PageTitle title={getSubdirectory} />

                    <Outlet />
                </motion.div>
            </div>
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
