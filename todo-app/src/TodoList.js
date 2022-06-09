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
  const remove = id => {
    setTodo(todos => todos.filter(todo => todo.id !== id))
  }
  return (
    <div>
      <h1>Todo App</h1>
      <NewTodoForm addTodo={addTodo} />
      <div className="TodoList-div">
        {todos.map(({ id, todo }) => (
          <Todo key={id} id={id} todo={todo} handleRemove={remove} />
        ))}
      </div>
    </div>
  )
}

export default TodoList
