import React from 'react'
import { motion } from 'framer-motion' 
export default function PageTitle({title}) {
    return (
        <motion.div
            initial={{ y: 0 ,opacity:0}}
            animate={{ y: [0,20,20,0],opacity:[0,.7,1,1,1,1,0] }}
            transition={{ duration: 5, delay: .5 }}
            className={` absolute left-0 top-1 h-7 z-10 w-full text-center   text-white ${false ? " p-2 top-4" : ""}`}
        >
            <div className={` m-auto w-max py-1 px-2 boxShad ow bg-maroon rounded-lg`}>
                <h3 className=' capitalize'>
                    <strong>{title}</strong>
                </h3>
            </div>
        </motion.div>
    )
}
