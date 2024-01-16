import React from 'react'
import Card from './card'
import DropDown from '../../ui/dropdown'

export default function Contributers() {
    return (
        <DropDown title={"مشارکت کننده گان"} liItems={[
            <Card />
        ]} />
    )
}
