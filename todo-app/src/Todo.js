import React, { useState } from 'react'
import './Todo.css'

/** display a div with the task of the todo
 *
 *  * This has no state
 *
 */

const Todo = ({ id, todo, handleRemove }) => {
  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => setIsHovering(true)
  const handleMouseOut = () => setIsHovering(false)
  const remove = () => handleRemove(id)

  return (
    <>
      <div
        className="Todo"
        data-testid="Todo"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <p>{todo}</p>
        <div
          className="productbox"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          {isHovering && <button onClick={remove}>x</button>}
        </div>
      </div>
    </>
  )
}

export default Todo
