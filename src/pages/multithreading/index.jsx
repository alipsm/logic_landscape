import React, { useEffect, useState } from 'react'
import HintBox from '../../components/hintBox'
export default function Multithreading() {
    
    const dotColors = [
        { color: "bg-greenCustome ", text: "درحال پردازش" },
        { color: "bg-yellowCustome ", text: "انتظار" },
        { color: "bg-redCustome ", text: "قحطی" },
        { color: "bg-maroon ", text: "بیکار" },
    ]
    const style = "inline-block w-4 h-4 rounded-full"

    const [myCircles, setMyCircles] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30])

    useEffect(() => {
        setMyCircles(myCircles.map((item,index) => {
            let rotate = (360 / myCircles.length) * index
            return rotate + "deg"
        }))


    }, [])

    return (
        <div className=' w-full h-full flex justify-center items-center'>
            <div className='relative flex justify-center items-center w-4 h-80 '>
                <div style={{ animationDuration: "20s" }} className={`border w-4 h-96 animate-spin duration-1000`}>
                    <div className={`${dotColors[0].color + style}`}>
                    </div>
                </div>
                {myCircles.map((item, i) => (
                    <div style={{ rotate: item }} className={`absolute top-0 border border-maroon w-4 h-80 `}>
                        {console.log('item', item)}
                        <div className={`${dotColors[1].color + style}`}>

                        </div>
                    </div>
                ))}
            </div>
            <HintBox title={"راهنما"}
                body={
                    <>
                        <div>
                            <ul>
                                {dotColors.map(item => (
                                    <li key={item.text}>
                                        <div className='flex text-white justify-end items-center gap-3 mt-6 '>
                                            <span className='opacity-60 text-xs'>{item.text}</span>
                                            <div className={`${item.color + style}`}></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                } />
        </div>
    )
}
