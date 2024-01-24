import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Card({ text, ico, link , minimull }) {
    return (
        <Link to={link}>
            <div className={`flex  cursor-pointer items-center ${minimull?" justify-center":"justify-end pl-4 pr-2"} py-3 w-full gap-3 text-white hover:opacity-80 transition-opacity`}>
                <span hidden={minimull} className='capitalize overflow-hidden whitespace-nowrap text-ellipsis text-xs opacity-55' dir='rtl'>{text}</span>
                <FontAwesomeIcon icon={`fa-solid ${ico}`} width={15} height={15} />
            </div>
        </Link>
    )
}
