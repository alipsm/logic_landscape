import React from 'react'
import Admin_pic from '../../img/kamyar.jpeg'
export default function AdminCard() {
  return (
    <div className='flex justify-evenly py-3'>
      <img src={Admin_pic} alt='admin pic' width={38} height={38} className=' rounded-full' />
      <div>
        <p className=' uppercase text-xs text-[#ffff] opacity-50'>computer engineer</p>
        <p className=' text-xs text-[#ffff] textShadow'>Mohsen Kamyar</p>
      </div>
    </div>
  )
}
