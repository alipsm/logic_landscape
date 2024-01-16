import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card() {
    return (
        <div className='flex justify-end cursor-pointer items-center py-3 pl-4 pr-2 w-full gap-3 text-white'>
            <span className='capitalize overflow-hidden whitespace-nowrap text-ellipsis text-xs' dir='rtl'>غذا خوردن فیلسوف ها</span>
            <FontAwesomeIcon icon="fa-solid fa-utensils" width={15} height={15}/>
        </div>
    )
}
