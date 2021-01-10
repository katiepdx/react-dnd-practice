import React from 'react'
import { Card } from './Card'
import { useDrop } from 'react-dnd'

export const Box = ({ card, moveCard }) => {
  // useDrop takes in an obj with 3 props
  const [{ isOver }, dropRef] = useDrop({
    // cards can ("accept") be dropped in this box - "card" also in useDrag hook
    accept: "card",
    // this is trigged when card is dropped - moveCard() is passed to box component
    drop: () => moveCard(),
    // checks if card isOver a box, if so, set isOver to true
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });
  return (
    <>
      <div
        className="box"
        ref={dropRef}
        style={{ backgroundColor: isOver ? "white" : "black" }}>{card ? <Card /> : "empty card"}</div>
    </>
  )
}
