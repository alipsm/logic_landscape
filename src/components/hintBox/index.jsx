import React, { useState } from 'react'
import Hr from '../../utils/graphics/hr/Hr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function HintBox({ title, body }) {
  const [minimull, setMinimull] = useState(true)
  return (
    <div className={`bg-maroon boxShadow absolute bottom-4 rounded-2xl  right-5 transition-all duration-200 ${minimull ? " p-2" : "w-44 px-2 py-4"}`}>
      <h2 className='flex items-center gap-2 text-white' dir='rtl'>
        <FontAwesomeIcon icon="fa-solid fa-circle-info" className='w-5 h-5 cursor-pointer' onClick={() => setMinimull(!minimull)} />
        {!minimull && (
          <>
            <b>
              {title}
            </b>
          </>
        )}
      </h2>
      {!minimull && (<>
        <Hr />
        {body}
      </>)}
    </div>
  )
}
