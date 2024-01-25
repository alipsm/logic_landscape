import React from 'react'
import Card from './card'
import ListItems from '../../../../../elements/listItems'
import Userpic from './img/contributer.jpeg'

export default function Contributers({minimull}) {
    const apiData=[
        {img:Userpic,name:"ali parsamanesh" , link:"https://github.com/alipsm"}
    ]
    return (
        <ListItems title={"مشارکت کننده گان"} minimull={minimull} liItems={apiData.map(item=>(
            <Card fullName={item.name} img={item.img} minimull={minimull}/>
        ))} />
    )
}
