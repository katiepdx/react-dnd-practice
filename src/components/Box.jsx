import React from 'react'
import { Card } from './Card'

export const Box = ({ card }) => {
  return (
    <>
      <div className="box">{card ? <Card /> : "empty card"}</div>
    </>
  )
}
