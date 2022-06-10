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

  it('can edit a todo', function () {
    const list = render(<TodoList />)
    addTodo(list)

    fireEvent.mouseOver(list.getByTestId('Todo'))
    fireEvent.click(list.getByTestId('Edit'))
    const editInput = list.getByText('write tests')
    fireEvent.change(editInput, { target: { value: 'sleep' } })
    fireEvent.click(list.getByTestId('Save'))

    // expect only edited todo to appear
    expect(list.getByText('sleep')).toBeInTheDocument()
    expect(list.queryByText('write tests')).not.toBeInTheDocument()
  })

  it('can delete a todo', function () {
    const list = render(<TodoList />)
    addTodo(list)

    fireEvent.mouseOver(list.getByTestId('Todo'))
    fireEvent.click(list.getByTestId('Remove'))

    // expect todo to be gone
    expect(list.queryByText('write tests')).not.toBeInTheDocument()
  })
})
