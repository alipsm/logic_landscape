import React, { useEffect, useMemo, useState } from 'react'
import HintBox from '../../components/hintBox'
import MultithreadingModules from './modules/index'
import PointSituation from '../../animations/pointSituation'
import Setting from './Setting'
import multithreadingHelper from "./helpers/index"

const { getNumberAtString } = multithreadingHelper

const { generateCircle, setProcessDifficult, DI, setProcessWaiting } = MultithreadingModules

var timeInterval;

export default function Multithreading() {


    const point_details = [
        { color: "bg-greenCustome ", status: "busy", text: "درحال پردازش" },
        { color: "bg-yellowCustome ", status: "wait", text: "انتظار" },
        { color: "bg-redCustome ", status: "lock", text: "وضعیت غیر مجاز" },
        { color: "bg-maroon ", status: "free", text: "بیکار" },
    ]

    const [showDesignDetails, setShowDesignDetails] = useState(false)
    const [myCircles1, setMyCircles1] = useState({
        circles: [{ deg: "", status: "free", spinningStage: 0 }],
        time: "8s",
        mainRadius: "20cm",
        aroundRadius: "12mm",
        rotateChecker: "0deg",
        monitorprocessIndex: [],
        processDifficult: 4,
        spinningStage: 0,
        waiting: 2,
        update: true
    })

    // init circles
    useEffect(() => {
        generateCircle(24, myCircles1.update, setMyCircles1)
    }, [])

    useEffect(() => {
        if (myCircles1.circles.length != 1) {
            let timer= Math.min((216/myCircles1.circles.length)*getNumberAtString(myCircles1.time),50);
            console.log('timer', timer)

            clearInterval(timeInterval)
            timeInterval = setInterval(() => {
                DI(myCircles1, setMyCircles1)
            }, (timer));
        }
    }, [myCircles1.update])

    function handleMultithreadingConfig(dropDownKey, value) {
        switch (dropDownKey) {
            case "thread":
                generateCircle(value, myCircles1.update, setMyCircles1)
                break;
            case "time":
                setMyCircles1({ ...myCircles1, time: value })
                break;
            case "mainRadius":
                setMyCircles1({ ...myCircles1, mainRadius: value })
                break;
            case "aroundCirsDeg":
                setMyCircles1({ ...myCircles1, aroundRadius: value })
                break;
            case "processDifficult":
                setProcessDifficult(value, setMyCircles1)
                break;
            case "waiting":
                setProcessWaiting(value, setMyCircles1)
                break;
            case "designDetails":
                let show = value === "مخفی" ? false : true
                setShowDesignDetails(show)
                break;

            default:
                break;
        }
    }

    const memoizedAroundPoints = useMemo(
        () =>
            myCircles1.circles?.map((item, i) => (
                <div style={{ rotate: item.deg, width: myCircles1.aroundRadius }} className={`absolute top-0 h-full  ${showDesignDetails && "border"} border-maroon`}>

                    <div style={{ width: myCircles1.aroundRadius, height: myCircles1.aroundRadius }} className={`flex justify-center items-center`}>
                        <PointSituation status={item.status} />
                    </div>
                </div>
            )
            ),
        [myCircles1.circles, myCircles1.aroundRadius]
    );

    const memoizedMainPoint = useMemo(() => (
        <div id='Checker-Line' style={{ animationDuration: myCircles1.time, height: myCircles1.mainRadius }} className={`flex animate-spin  justify-center relative  w-4 h-9 duration-1000 z-30`}>
            <div className=' absolute -top-8 flex justify-center items-start w-20 rounded-sm my-auto h-1'>
                <div className='items-center bg-maroon w-6 rounded-md h-3 '>
                </div>
            </div>
        </div>
    ), [showDesignDetails, myCircles1.time, myCircles1.mainRadius])
    return (
        <div className=' w-full h-full flex justify-center items-center'>
            <div className={`relative flex justify-center items-center w-4 h-[${myCircles1.mainRadius}]`}>
                {memoizedMainPoint}
                {memoizedAroundPoints}
            </div>
            <HintBox title={"راهنما"}
                body={
                    <>
                        <div>
                            <ul>
                                {point_details.map(item => (
                                    <li key={item.text}>
                                        <div className='flex text-white justify-end items-center gap-3 mt-6'>
                                            <span className='opacity-60 text-xs'>{item.text}</span>
                                            <div className='w-4 h-4'>
                                                <PointSituation status={item.status} />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                } />

            <Setting getDropDownValue={handleMultithreadingConfig} />
        </div>
    )
}
