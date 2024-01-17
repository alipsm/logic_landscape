import React from 'react'
import { motion } from 'framer-motion'

export default function MacControllerAnimation() {
  const dotColors = ["bg-redCustome", "bg-yellowCustome", "bg-greenCustome"]
  const style = "inline-block w-3 h-3 rounded-full"
  return (
    <div className='flex flex-start gap-2'>
      {
        dotColors.map((item, i) => (
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .5, delay: (i*.2)+1.2 }}
          >
            <span key={item} className={`${style} ${item}`}></span>
          </motion.div>
        ))
      }
    </div>
  )
}
