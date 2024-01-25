const multithreadingHelper = (() => {


    const getRandomNum = (max = 10) => Math.floor(Math.random() * max)
    const isBusy = (item) => item?.status === "busy"
    const isWait = (item) => item?.status === "wait" || item === "wait"
    const isFree = (item) => item?.status === "free" || item === "free"
    const isLock = (item) => item?.status === "lock" || item === "lock"
    const roundToDown = (num) => Math.floor(num / 10) * 10;
    const getNumberAtString = (str) => str?.match(/[\d\.]+/g)?.join("")
    const getPointsWithDeg = (mainDeg, pointDeg) => mainDeg + 10 >= pointDeg & mainDeg <= pointDeg

    function getCurrentElementRotation(el) {
        try {
            var st = window.getComputedStyle(el, null);
            var tm = st.getPropertyValue("-webkit-transform") ||
                st.getPropertyValue("-moz-transform") ||
                st.getPropertyValue("-ms-transform") ||
                st.getPropertyValue("-o-transform") ||
                st.getPropertyValue("transform") ||
                "none";
            if (tm != "none") {
                var values = tm.split('(')[1].split(')')[0].split(',');
                var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
                return (angle < 0 ? angle + 360 : angle);
            }
            return 0;
        } catch (error) {
            return 0;
        }
    }

    return {
        getCurrentElementRotation,
        getRandomNum,
        isBusy,
        isWait,
        isFree,
        isLock,
        roundToDown,
        getNumberAtString,
        getPointsWithDeg
    };
})();
export default multithreadingHelper;
