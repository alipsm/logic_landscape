import React from 'react'
import user_pic from './img/contributer.jpeg'

export default function Card() {
  return (
    <div className='flex justify-start items-center py-3 pl-4 pr-2 w-full gap-3 hover:opacity-80 transition-opacity cursor-pointer'>
      <img src={user_pic} alt='ali parsamanesh' className=' w-6 h-6 rounded-full'/>
      <span className='capitalize overflow-hidden whitespace-nowrap text-ellipsis'>ali parsamanesh</span>
    </div>
  )
}
