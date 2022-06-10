import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TodoList from './TodoList'
import '@testing-library/jest-dom/extend-expect'

function addTodo(todoList) {
  const taskInput = todoList.getByLabelText('Task:')
  fireEvent.change(taskInput, { target: { value: 'write tests' } })
  const submitButton = todoList.getByText('+')
  fireEvent.click(submitButton)
}

describe('<TodoList /> rendering', () => {
  it('renders without crashing', function () {
    render(<TodoList />)
  })

  it('matches snapshot', function () {
    const { asFragment } = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('can add a todo', function () {
    const list = render(<TodoList />)
    addTodo(list)

    // expect form to clear and todo to be on the page
    expect(list.getByLabelText('Task:')).toHaveValue('')
    expect(list.getByText('write tests')).toBeInTheDocument()
    expect(list.getByTestId('Edit')).toBeInTheDocument()
    expect(list.getByTestId('Remove')).toBeInTheDocument()
  })
})
