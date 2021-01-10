import React from 'react'
import { useDrag } from 'react-dnd'

export const Card = () => {
  // use drag takes in an obj with 2 props 
  const [{ isDragging }, dragRef] = useDrag({
    // Prop 1: Draggable item type - card
    item: {
      type: "card",
    },
    // Prop 2: monitor obj that checks curr state (drag and drop) of obj being dragged
    // is it being dragged?
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  // add styles for the card currently being dragged - use isDragging to conditionally add styles
  return <div
    className="card"
    ref={dragRef}
    // green when dragging, pink when not dragging
    style={{ backgroundColor: isDragging ? "green" : "pink" }}>Card</div>
}
