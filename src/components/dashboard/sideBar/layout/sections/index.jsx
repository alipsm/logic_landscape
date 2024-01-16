import React from 'react'
import Card from './card'
import DropDown from '../../ui/dropdown'

export default function Sections() {
  return (
      <DropDown title={"بخش ها"} liItems={[
        <Card />
      ]} />
  )
}
