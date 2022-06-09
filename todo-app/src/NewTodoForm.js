import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

/** render a form with one text input for the task to be created
 *
 * When this form is submitted, a new Todo component should be created
 *
 * */

const NewTodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState('')
  const handleChange = evt => {
    const { name, value } = evt.target
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    addTodo({ ...formData, id: uuid() })
    // setFormData(INITIAL_STATE)
  }

  return (
    <>
      <form className="NewTodoForm">
        <label htmlFor="todo" className="NewTodoForm-Label">
          Todo
        </label>
        <input
          className="NewTodoForm-Input"
          id="todo"
          type="text"
          name="todo"
          placeholder="Enter a task"
          value={formData.todo}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </>
  )
}

export default NewTodoForm
