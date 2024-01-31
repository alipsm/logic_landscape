import React from 'react'

export default function DoesNotSupport() {
    return (
        <div className='flex justify-center items-center w-full h-full flex-col gap-3 md:hidden text-white'>
            <h1 className=' text-2xl text-maroon' dir='rtl'>
                <strong>
                    نمیتونم خودم رو توی این دستگاه جا بدم :(
                </strong>
            </h1>
            <h2 className=' opacity-70' dir='rtl'>
                محدودیت دسترسی برایه نمایشگر های کوچک داریم
            </h2>
            <i className='text-sm opacity-80' dir='rtl'>
                لطفا از صفحه نمایش بزرگتری استفاده کنید
            </i>
        </div>
    )
}
