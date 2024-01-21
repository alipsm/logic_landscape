import React from 'react'
import Card from './card'
import ListItems from '../../../../../elements/listItems'

export default function Sections() {
  return (
      <ListItems title={"بخش ها"} liItems={[
        <Card text={"غذا خوردن فیلسوف ها"} link={"multithreading"} ico={"fa-utensils"}/>
      ]} />
  )
}
