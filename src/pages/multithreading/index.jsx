import React, { useEffect, useMemo, useState } from 'react'
import HintBox from '../../components/hintBox'
import PointSituation from '../../animations/pointSituation'
import Setting from './Setting'
import multithreadingHelper from "./helpers/index"

const { getRandomNum, isBusy, isWait, isFree, isLock, roundToDown, getNumberAtString, getPointsWithDeg, getCurrentElementRotation } = multithreadingHelper

var timeInterval;
export default function Multithreading() {

    const DEFAULT_DIFFICULT_VALUE = 15

    const dotColors = [
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

    useEffect(() => {
        handleCirclesCount(24, myCircles1.update)
    }, [])

    useEffect(() => {
        if (myCircles1.circles.length != 1) {
            clearInterval(timeInterval)
            timeInterval = setInterval(() => {
                DI(myCircles1)
            }, (20));
        }
    }, [myCircles1.update])

    function DI(mainCircleData) {
        var { circles, monitorprocessIndex, update, processDifficult, waiting, time, spinningStage } = mainCircleData
        let num = getRandomNum(3)
        circles = handleRandomActivity(circles, waiting, spinningStage)
        num = getRandomNum(3)
        let finishprocessData = finishprocess(circles, processDifficult, time)
        if (finishprocessData != undefined) {
            const { getCircles } = finishprocessData
            circles = getCircles
        }
        circles = startChecking(circles)
        // circles = checkLockProcess(circles)


        setMyCircles1((prevMyCircles) => ({
            ...prevMyCircles,
            circles,
            update: !update,
        }));
    }

    function finishprocess(circles, processDifficult, time) {
        let getProcessesIndex = []
        circles.forEach((item, i) => {
            if (isBusy(item))
                getProcessesIndex.push(i)

        })

        if (getProcessesIndex.length === 0)
            return undefined

        // let randomNum1 = getRandomNum(DEFAULT_DIFFICULT_VALUE * processDifficult)
        let randomNum1 = getRandomNum(((DEFAULT_DIFFICULT_VALUE + (getNumberAtString(myCircles1.time) / 2)) * (processDifficult)))
        let randomNum2 = getRandomNum(((DEFAULT_DIFFICULT_VALUE - (getNumberAtString(myCircles1.time) / 2)) / processDifficult))
        if (randomNum1 > randomNum2)
            return undefined

            let getAllCircles;
            getAllCircles = [...circles]
            let round= Math.ceil(myCircles1.circles.length / 10)
            console.log('round', round)
        for (let index = 0; index < Math.ceil(myCircles1.circles.length / 20); index++) {
            const getRandomProcessIndex = getProcessesIndex[getRandomNum(getProcessesIndex.length - 1)] || getProcessesIndex[0]
            // getProcessesIndex = getProcessesIndex.filter(item => item != getRandomProcessIndex)
            const { deg } = getAllCircles[getRandomProcessIndex]
            getAllCircles[getRandomProcessIndex] = { deg, status: "free" }
        }
        return {
            getCircles: getAllCircles,
        }
    }

    function startChecking(circles) {
        const element = document.getElementById("Checker-Line")
        let value = getCurrentElementRotation(element)
        let pointsIndex = getPointsIndexWithDeg(circles, value)
        return changePointStatusToprocess(circles, pointsIndex)
    }

    function getPointsIndexWithDeg(circles, deg) {
        let currentDeg = roundToDown(deg)
        let pointsNeedUpdate = []
        circles?.map((item, i) => {
            let degValue = getNumberAtString(item.deg)
            degValue = roundToDown(degValue)
            if (getPointsWithDeg(currentDeg, degValue)) {
                pointsNeedUpdate.push(i)
            }
        })
        return pointsNeedUpdate
    }

    function handleMultithreadingConfig(dropDownKey, value) {
        switch (dropDownKey) {
            case "thread":
                handleCirclesCount(value, myCircles1.update)
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
                handleProcessDifficult(value)
                break;
            case "waiting":
                handleProcessWaiting(value)
                break;
            case "designDetails":
                let show = value === "مخفی" ? false : true
                setShowDesignDetails(show)
                break;

            default:
                break;
        }
    }
    function handleProcessWaiting(mood) {
        let waiting = 0;
        switch (mood) {
            case "مشغول":
                waiting = 0
                break;
            case "زیاد":
                waiting = 1
                break;
            case "متوسط":
                waiting = 2
                break;
            case "کم":
                waiting = 4
                break;

            default:
                break;
        }
        setMyCircles1((prevMyCircles) => ({
            ...prevMyCircles,
            waiting,
            update: !myCircles1.update
        }));
    }

    function handleProcessDifficult(mood) {
        let difficult = 0;
        switch (mood) {
            case "مشغول":
                difficult = 10
                break;
            case "سنگین":
                difficult = 6
                break;
            case "معمولی":
                difficult = 4
                break;
            case "سبک":
                difficult = 3
                break;

            default:
                break;
        }
        setMyCircles1((prevMyCircles) => ({
            ...prevMyCircles,
            processDifficult: difficult,
            update: !myCircles1.update
        }));
    }

    function getCirclesDeg(circlesCount) {
        let innerArray = [...Array(circlesCount)]
        return (innerArray.map((item, index) => {
            let rotate = (360 / innerArray.length) * index
            return rotate + "deg"
        })).map(item => { return { deg: item, status: "free" } })
    }

    function handleCirclesCount(circlesCount, update) {
        let circles = getCirclesDeg(circlesCount)
        setMyCircles1((prevMyCircles) => ({
            ...prevMyCircles,
            circles,
            monitorprocessIndex: [],
            update: !update
        }));
    }

    function changePointStatusToprocess(cir, pointsIndex = []) {
        let getAllCircles = [...cir]
        pointsIndex.forEach(pointIndex => {
            const { status, deg, spinningStage } = getAllCircles[pointIndex]
            if (isWait(status) || isLock(status)) {
                let circlesLength = getAllCircles.length
                let nextIndex = (pointIndex + 1 > circlesLength - 1 ? 0 : pointIndex + 1)
                let lastIndex = pointIndex - 1 === -1 ? circlesLength - 1 : pointIndex - 1
                let beforPointStatus = !isBusy(getAllCircles[lastIndex])
                let afterPointStatus = !isBusy(getAllCircles[nextIndex])
                if (beforPointStatus && afterPointStatus) {
                    getAllCircles[pointIndex] = { deg, status: "busy" }
                } else {
                    getAllCircles[pointIndex] = { deg, status: "lock" }
                }
            }
        })

        return getAllCircles


    }

    function handleRandomActivity(cir, waiting, spinningStage) {
        let randomNum1 = getRandomNum(DEFAULT_DIFFICULT_VALUE * waiting)
        let randomNum2 = getRandomNum(DEFAULT_DIFFICULT_VALUE / waiting)
        if (randomNum1 > randomNum2)
            return cir

        let circlesLength = cir.length
        let randomIndex = Math.floor(Math.random() * circlesLength)
        let getAllCircles = [...cir]
        const { status, deg } = getAllCircles[randomIndex]
        if (isFree(status)) {
            getAllCircles[randomIndex] = { deg, status: "wait", spinningStage }
        }
        return getAllCircles
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
                                {dotColors.map(item => (
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
