import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './NewTodoForm.css'

/** render a form with one text input for the task to be created
 *
 * When this form is submitted, a new Todo component should be created
 *
 * */

const NewTodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('')
  const handleChange = evt => {
    setTask(evt.target.value)
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    addTodo({ task, id: uuid() })
    setTask('')
  }

  return (
    <>
      <form className="NewTodoForm" onSubmit={handleSubmit}>
        <label htmlFor="task" className="NewTodoForm-Label">
          Add Task
        </label>
        <input
          className="NewTodoForm-Input"
          id="task"
          name="task"
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={handleChange}
        />
        <button>Add Task</button>
      </form>
    </>
  )
}

export default NewTodoForm
