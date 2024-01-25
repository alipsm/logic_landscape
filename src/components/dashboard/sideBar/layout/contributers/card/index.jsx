import React from 'react'
export default function Card({ img, fullName, minimull }) {
  return (
    <a href="https://github.com/alipsm" target='_blank' className={`flex items-center ${minimull ? "p-2 justify-center" : "py-3 pl-4 pr-2 justify-start"} w-full gap-3 hover:opacity-80 transition-opacity cursor-pointer`}>
        <img src={img} alt={fullName} className={`${minimull ? "w-f ull h-f ull" : ""} w-6 h-6 rounded-full`} />
        <span hidden={minimull} className='capitalize overflow-hidden whitespace-nowrap text-ellipsis'>{fullName}</span>
    </a>
  )
}
