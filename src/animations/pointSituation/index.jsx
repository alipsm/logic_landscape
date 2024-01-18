import React from 'react'

PointSituation.defaultProps = {
    status: "free"
}

export default function PointSituation({ status }) {
    const style = "inline-block w-full h-full rounded-full"
    const statusType = {
        free: (
            <div className={`${style} bg-maroon relative  border border-maroon`}>
            </div>
        ),
        busy: (
            <svg className={`animate-spin -ml-1 text-[#065F46]`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity -25 text-greenCustome" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        ),
        wait: (
            <div className={`${style} bg-yellowCustome relative  border border-maroon`}>
                <div className={` absolute top-0 left-0 w-full h-full bg-yellowCustome animate-ping rounded-full border border-maroon`}>
                </div>
            </div>
        ),
        lock: (
            <div className={`${style} bg-redCustome relative  border border-maroon animate-pulse`}>
            </div>
        )
    }

    return (<>{statusType[status]}</>)
}
