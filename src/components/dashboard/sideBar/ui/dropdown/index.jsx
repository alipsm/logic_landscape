import React from 'react'

DropDown.defaultProps = {
    title: "my title",
    liItems: ["item one", "item two"]
}
export default function DropDown({ title, liItems }) {
    return (
        <div className="flex flex-col items-end text-xs my-3">
            <h3 className=' text-white opacity-35 py-1 cursor-default'>
                <strong>

                    {title}
                </strong>
            </h3>
            <ul className='pr-2 text-sm space-y-1 text-white opacity-55 w-full'>

                {
                    liItems.map((item, index) => (
                        <li key={index} className='hover:opacity-80 transition-opacity cursor-pointer'>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
