import React from 'react'
import { motion } from 'framer-motion'

export default function MacBurgerMenu({ minimull , setMinimull }) {
  const dotColors = ["bg-redCustome", "bg-yellowCustome", "bg-greenCustome"]
  const style = `inline-block ${minimull?"w-full h-1":"w-3 h-3"} rounded-full`
  return (
    <div onClick={() => setMinimull(!minimull)} className={`flex flex-col items-center relative justify-between boxShadow bg-maroon ${minimull?"rounded-lg p-1":"rounded-3xl px-2 py-1"}   cursor-pointer transition-opacity hover:opacity-80`}>
      <div className={`flex justify-center  relative ${minimull ? "flex-col items-center gap-1 py-1" : "gap-2"} w-full`}>
        {
          dotColors.map((item, i) => (
            <div className={`w-full`} key={item}>
            <motion.div
            key={minimull}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .5, delay: (i * .2)  }}
            className={`w-full text-center ${minimull && "flex px-2"}`}
            
            >
              <span key={item} className={`${style} ${item}`}></span>
            </motion.div>
              </div>
          ))
        }
      </div>
    </div>
  )
}
