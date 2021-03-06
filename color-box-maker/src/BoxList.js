import React, { useState } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import './BoxList.css'

const BoxList = () => {
  const [boxes, setBoxes] = useState([])
  const addBox = newBox => {
    setBoxes(boxes => [...boxes, newBox])
  }
  const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id))
  }

  return (
    <div>
      <h1 className="BoxList-h1">Color Box Generator</h1>
      <NewBoxForm addBox={addBox} />
      <div className="BoxList-div">
        {boxes.map(({ id, backgroundColor, width, height }) => (
          <Box
            key={id}
            id={id}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            handleRemove={remove}
          />
        ))}
      </div>
    </div>
  )
}

export default BoxList
