import React from 'react'
import Admin_pic from '../../img/kamyar.jpeg'
export default function AdminCard() {
  return (
    <div className='flex gap-2 justify-evenly py-3'>
      <img src={Admin_pic} alt='admin pic' width={38} height={38} className=' w-10 h-10 rounded-full' />
      <div>
        <p className=' uppercase text-xs text-[#ffff] opacity-50 text-nowrap'>computer engineer</p>
        <p className=' text-xs text-[#ffff] textShadow'>Mohsen Kamyar</p>
      </div>
    </div>
  )
}
