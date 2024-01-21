import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Card({ text, ico, link }) {
    return (
        <Link to={link}>
            <div className='flex justify-end cursor-pointer items-center py-3 pl-4 pr-2 w-full gap-3 text-white hover:opacity-80 transition-opacity'>
                <span className='capitalize overflow-hidden whitespace-nowrap text-ellipsis text-xs opacity-55' dir='rtl'>{text}</span>
                <FontAwesomeIcon icon={`fa-solid ${ico}`} width={15} height={15} />
            </div>
        </Link>
    )
}
