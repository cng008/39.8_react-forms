import React, { useState } from 'react'

/** display a div with the task of the todo
 *
 *  * This has no state
 *
 */

const Todo = ({ id, todo, handleRemove }) => {
  return (
    <>
      <div className="Todo">
        <p>{todo}</p>
      </div>
    </>
  )
}
export default Todo
