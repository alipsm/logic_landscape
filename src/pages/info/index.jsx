import React from 'react'
import Skeleton, { } from 'react-loading-skeleton'
import PointSituation from '../../animations/pointSituation'
import Hr from '../../utils/graphics/hr/Hr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Info() {
  return (
    <div className='  w-full relative'>
      <div className={`w-full h-full flex justify-center items-center   absolute   transition-all duration-200  px-2 py-4`}>
        <div className='flex justify-center items-center flex-col  bg-maroon text-white w-64  py-8 rounded-2xl boxShadow'>
          <div className='flex justify-end items-center '>
            <h2 className='flex items-center gap-2 pr-2' dir='rtl'>
              <strong>
                تو راهیم...
              </strong>
            </h2>
            <FontAwesomeIcon icon="fa-solid fa-clock" className='w-5 h-5 cursor-pointer' />
          </div>
          <Hr />
          <p className=' px-4' dir='rtl'>
            <small>
              بزودی این صفحه قابل دسترس می‌باشد
            </small>

          </p>
        </div>

      </div>

        <div className='flex justify-start  items-center text-maroon' dir='rtl'>
            <h1 className=' text-xl'>

            شریک شو
            </h1>
        </div>
      <br />
      <hr />
      <div className='  w-full h-full'>
        <br />
        <div className='flex justify-start  items-center text-maroon' dir='rtl'>
          <div className=' w-4 h-4 ml-3'>
            <PointSituation status={"free"} />
          </div>
          <h4 className=" ">
            <strong>
              در انتقال فهم دانش سهیم باشیم ...
            </strong>
          </h4>
        </div>
        <Skeleton count={3} baseColor='#0f090c8f' className=' opacity-10 ' duration={5} />
        <Hr />
        <div className='flex justify-between items-center w-full relative'>
          <Skeleton count={1} width={"15vw"} height={"15vw"} circle baseColor='#0f090c8f' className=' opacity-10 ' duration={5} />
          <Skeleton count={9} width={"50vw"} height={""} baseColor='#0f090c8f' className=' opacity-10 ' duration={5} />
        </div>
        <Hr />
        <Skeleton count={3} height={10} baseColor='#0f090c8f' className=' opacity-10 ' duration={5} />
        <Hr />
        <Skeleton count={7} baseColor='#0f090c8f' className=' opacity-10 ' duration={5} />

      </div>

    </div>
  )
}
