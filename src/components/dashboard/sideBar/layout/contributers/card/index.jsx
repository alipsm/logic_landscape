import React from 'react'
import user_pic from './img/contributer.jpeg'

export default function Card({minimull}) {
  return (
    <div className={`flex  items-center ${minimull?"p-2 justify-center":"py-3 pl-4 pr-2 justify-start"} w-full gap-3 hover:opacity-80 transition-opacity cursor-pointer`}>
      <img src={user_pic} alt='ali parsamanesh' className={`${minimull?"w-f ull h-f ull":""} w-6 h-6 rounded-full`}/>
      <span hidden={minimull} className='capitalize overflow-hidden whitespace-nowrap text-ellipsis'>ali parsamanesh</span>
    </div>
  )
}
