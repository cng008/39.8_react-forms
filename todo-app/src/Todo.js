import React, { useState } from 'react'
import './Todo.css'

/** display a div with the task of the todo
 *
 *  * This has no state
 *
 */

const Todo = ({ id, todo, handleRemove }) => {
  const remove = () => handleRemove(id)

  return (
    <>
      <div className="Todo">
        <p>{todo}</p>
        <button onClick={remove}>x</button>
      </div>
    </>
  )
}

export default Todo
