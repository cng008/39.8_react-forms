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
    <div className="ToDoList">
      <h1>Todo App</h1>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(({ id, todo }) => (
          <li>
            <Todo key={id} id={id} todo={todo} handleRemove={remove} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
