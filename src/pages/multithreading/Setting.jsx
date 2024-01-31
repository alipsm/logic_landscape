import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DropDown from '../../elements/dropDown'
import ListItems from '../../elements/listItems'
import Hr from '../../utils/graphics/hr/Hr'
export default function Setting({ getDropDownValue }) {
    const [minimull, setMinimull] = useState(true)
    return (
        <motion.div
            key={minimull}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x:  0, opacity: 1 }}
            transition={{ duration: .5, delay: .5 }}
            className={`absolute left-0  ml-3 flex flex-col rounded-3xl z-20 ${minimull ? " p-2 top-4" : " min-w-52  h-full w-52 my-4"}`}
        >
            {/* <div className={`absolute left-0  ml-3 flex flex-col transition-all rounded-3xl ${minimull ? " p-2 top-4" : " min-w-52  h-full w-52 my-4"}`}> */}
            <div className={` flex flex-col justify-start h-full w-full boxShadow bg-maroon rounded-2xl  ${minimull ? "p-2" : "px-4 py-5 my-4"}`}>
                <h2 className='flex items-center gap-2 text-white' dir='rtl'>
                    <FontAwesomeIcon icon="fa-solid fa-gear" className='w-5 h-5 cursor-pointer' onClick={() => setMinimull(!minimull)} />
                    {!minimull && (
                        <>
                            <b>
                                تنظیمات
                            </b>
                        </>
                    )}
                </h2>
                {!minimull && (
                    <>
                        <Hr />
                        <ListItems title={"عملکرد"} liItems={[
                            <DropDown title={"تعداد پردازش ها:"} items={[3, 6, 12, 24, 48, 96]} defautlIndexItem={3} getItem={(value) => getDropDownValue("thread", value)} />,
                            <DropDown title={"میزان پردازش ها:"} items={["سبک", "معمولی", "سنگین", "مشغول"]} defautlIndexItem={1} getItem={(value) => getDropDownValue("processDifficult", value)} />,
                            <DropDown title={"درخواست پردازش:"} items={["کم", "متوسط", "زیاد", "مشغول"]} defautlIndexItem={1} getItem={(value) => getDropDownValue("waiting", value)} />,
                            <DropDown title={"سرعت سرکشی:"} items={[...("2s,4s,8s,16s,32s".split(","))]} defautlIndexItem={3} getItem={(value) => getDropDownValue("time", value)} />,
                        ]} />
                        <Hr />
                        <ListItems title={"تنظیمات اضافی"} liItems={[
                            <DropDown title={"شعاع دایره اصلی:"} items={["5cm", "15cm", "20cm"]} defautlIndexItem={2} getItem={(value) => getDropDownValue("mainRadius", value)} />,
                            <DropDown title={"شعاع دایره های فرعی:"} items={["3mm", "6mm", "12mm", "24mm", "48mm"]} defautlIndexItem={2} getItem={(value) => getDropDownValue("aroundCirsDeg", value)} />,
                            <DropDown title={"خط های محاسبات:"} items={["مخفی", "نمایان"]} getItem={(value) => getDropDownValue("designDetails", value)} />,
                        ]} />
                    </>
                )}
            </div>
            {/* </div> */}
        </motion.div>
    )
}
