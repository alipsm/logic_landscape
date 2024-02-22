import multithreadingHelper from "../helpers/index"

const { getRandomNum, isBusy, isWait, isFree, isLock, roundToDown, getNumberAtString, getPointsWithDeg, getCurrentElementRotation } = multithreadingHelper

const DEFAULT_DIFFICULT_VALUE = 15

const MultithreadingModules = (() => {



    // Thay are PRIVATE modules

    function _finishprocess(circles, processDifficult, time) {
        let getProcessesIndex = []
        circles.forEach((item, i) => {
            if (isBusy(item))
                getProcessesIndex.push(i)

        })

        if (getProcessesIndex.length === 0)
            return undefined

        let randomNum1 = getRandomNum(((DEFAULT_DIFFICULT_VALUE + (getNumberAtString(time) / 2)) * (processDifficult)))
        let randomNum2 = getRandomNum(((DEFAULT_DIFFICULT_VALUE - (getNumberAtString(time) / 2)) / processDifficult))
        if (randomNum1 > randomNum2)
            return undefined

        let getAllCircles;
        getAllCircles = [...circles]
        for (let index = 0; index < Math.ceil(circles.length / 20); index++) {
            const getRandomProcessIndex = getProcessesIndex[getRandomNum(getProcessesIndex.length - 1)] || getProcessesIndex[0]
            const { deg } = getAllCircles[getRandomProcessIndex]
            getAllCircles[getRandomProcessIndex] = { deg, status: "free" }
        }
        return {
            getCircles: getAllCircles,
        }
    }

    function _startChecking(circles) {
        const element = document.getElementById("Checker-Line")
        let value = getCurrentElementRotation(element)
        let pointsIndex = _getPointsIndexWithDeg(circles, value)
        return _changePointStatusToprocess(circles, pointsIndex)
    }

    function _getPointsIndexWithDeg(circles, deg) {
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

    function _getCirclesDeg(circlesCount) {
        let innerArray = [...Array(circlesCount)]
        return (innerArray.map((item, index) => {
            let rotate = (360 / innerArray.length) * index
            return rotate + "deg"
        })).map(item => { return { deg: item, status: "free" } })
    }

    function _changePointStatusToprocess(cir, pointsIndex = []) {
        let getAllCircles = [...cir]
        pointsIndex.forEach(pointIndex => {
            const { status, deg } = getAllCircles[pointIndex]
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

    function _handleRandomActivity(cir, waiting, spinningStage) {
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


    // Thay are PUBLIC modules
    function generateCircle(circlesCount,update, callback) {
        let circles = _getCirclesDeg(circlesCount)
        callback((prevMyCircles) => ({
            ...prevMyCircles,
            circles,
            monitorprocessIndex: [],
            update: !update
        }));
    }

    function setProcessWaiting(mood, callback) {
        const getMoodCode={
            "مشغول":0,
            "زیاد":1,
            "متوسط":2,
            "کم":4
        }[mood] || 2
        callback((prevMyCircles) => ({
            ...prevMyCircles,
            getMoodCode,
            update: !prevMyCircles.update
        }));
    }

    function setProcessDifficult(mood, callback) {
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
        callback((prevMyCircles) => ({
            ...prevMyCircles,
            processDifficult: difficult,
            update: !prevMyCircles.update
        }));
    }

    function DI(mainCircleData, callback) {
        var { circles, update, processDifficult, waiting, time, spinningStage } = mainCircleData
        let num = getRandomNum(3)
        circles = _handleRandomActivity(circles, waiting, spinningStage)
        num = getRandomNum(3)
        let finishprocessData = _finishprocess(circles, processDifficult, time)
        if (finishprocessData != undefined) {
            const { getCircles } = finishprocessData
            circles = getCircles
        }
        circles = _startChecking(circles)

        callback((prevMyCircles) => ({
            ...prevMyCircles,
            circles,
            update: !update,
        }));
    }

    return {
        generateCircle,
        setProcessDifficult,
        setProcessWaiting,
        DI
    }
})()

export default MultithreadingModules