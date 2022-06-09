import React, { useState } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

/** render the NewTodoForm component
 * render the list of Todo components
 */

const TodoList = () => {
  const [todos, setTodo] = useState([])
  const addTodo = newTodo => {
    setTodo(todos => [...todos, newTodo])
  }
  return (
    <div>
      <h1>Todo App</h1>
      <NewTodoForm addTodo={addTodo} />
      <div className="TodoList-div">
        {todos.map(({ id, todo }) => (
          <Todo key={id} id={id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default TodoList
