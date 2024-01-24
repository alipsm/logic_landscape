import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
export default function Banner({ minimull }) {
    return (
        <div className={`flex justify-evenly flex-col items-center p-3 gap-2 ${minimull?" ":"bg-[#380e241a] shadowBox border border-[#552e32]"}   w-full h-max rounded-3xl   text-white transition-shadow hover:shadow-none`} dir='rtl'>
            
                <h3 hidden={minimull}>
                    <b>
                        شریک شو!
                    </b>
                </h3>
                <p hidden={minimull} className=' opacity-55 text-xs'>همین الان یکی از مباحث کامپیوتر
                    رو به انیمیشن تبدیل کن...</p>
            
            <Link to={"info"}>
                <button className={`flex bannerButtonShadow justify-between items-center gap-2 rounded-lg bg-[#E0822D] ${minimull?" p-3":"py-2 px-4"} hover:opacity-90 hover:shadow-none transition-all`}>
                    <span hidden={minimull}>
                        اشتراک گذاری
                    </span>
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                </button>
            </Link>
        </div>
    )
}
