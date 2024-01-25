import React from 'react'
import Card from './card'
import ListItems from '../../../../../elements/listItems'

export default function Sections({minimull}) {
  return (
      <ListItems title={"بخش ها"} minimull={minimull} liItems={[
        <Card text={"غذا خوردن فیلسوف ها"} minimull={minimull} link={"multithreading"} ico={"fa-utensils"}/>
      ]} />
  )
}
