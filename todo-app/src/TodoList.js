import React, { useState } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

/** render the NewTodoForm component
 * render the list of Todo components
 */

const TodoList = () => {
  const [todos, setTodos] = useState([])

  // add a new todo

  const addTodo = newTodo => {
    setTodos(todos => [...todos, newTodo])
  }

  // update a todo with updatedTask
  const update = (id, updatedTask) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    )
  }

  // delete a todo by id
  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }
  return (
    <div className="ToDoList">
      <h1>Todo App</h1>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            handleRemove={remove}
            update={update}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
