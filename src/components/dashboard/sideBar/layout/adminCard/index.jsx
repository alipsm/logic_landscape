import React from 'react'
import Admin_pic from '../../img/kamyar.jpeg'
export default function AdminCard({ minimull }) {
  const link = "https://www.linkedin.com/in/mohsen-kamyar-a68a627/"
  return (
    <div className='flex gap-2 justify-evenly py-3'>
      <a href={link} target='_blank'>

        <img src={Admin_pic} alt='admin pic' width={38} height={38} className=' w-10 h-10 rounded-full' />
      </a>
      <div hidden={minimull} className=' '>
        <div className=' flex justify-evenly flex-col h-full'>
          <p className=' uppercase text-xs text-[#ffff] opacity-50 text-nowrap'>computer engineer</p>
          <a href={link} target='_blank' className=' text-xs text-[#ffff] textShadow underline underline-offset-2'>Mohsen Kamyar</a>
        </div>
      </div>
    </div>
  )
}