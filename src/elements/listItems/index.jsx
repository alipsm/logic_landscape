import React from 'react'

ListItems.defaultProps = {
    title: "my title",
    liItems: ["item one", "item two"]
}
export default function ListItems({ title, liItems }) {
    return (
        <div className="flex flex-col items-end text-xs my-2">
            <h3 className=' text-white opacity-35 py-1 cursor-default'>
                <strong>
                    {title}
                </strong>
            </h3>
            <ul className='pr-2 text-sm space-y-1 text-white w-full'>

                {
                    liItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
