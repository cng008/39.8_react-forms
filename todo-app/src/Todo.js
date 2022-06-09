import React, { useState } from 'react'
import './Todo.css'

/** display a div with the task of the todo
 *
 *  * This has no state
 *
 */

const Todo = ({ id, task, handleRemove, update }) => {
  const [editTask, setEditTask] = useState(task)
  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => {
    setIsEditing(edit => !edit)
  }
  const handleChange = evt => {
    setEditTask(evt.target.value)
  }
  const handleUpdate = evt => {
    evt.preventDefault()
    update(id, editTask)
    setIsEditing(false)
  }

  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => setIsHovering(true)
  const handleMouseOut = () => setIsHovering(false)

  const remove = () => handleRemove(id)
  // const edit = () => handleUpdate(id)

  // default todo view
  let jsx = (
    <>
      <div
        className="Todo"
        data-testid="Todo"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <p>{task}</p>
        <div
          className="productbox"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          {isHovering && <button onClick={toggleEdit}>Edit</button>}
          {isHovering && <button onClick={remove}>Remove</button>}
        </div>
      </div>
    </>
  )

  // todo view when editing
  if (isEditing) {
    jsx = (
      <>
        <form onSubmit={handleUpdate}>
          <input
            className="Todo-Input"
            type="text"
            value={editTask}
            onChange={handleChange}
          />
          <button>Save</button>
        </form>
      </>
    )
  }

  return jsx
}

export default Todo
