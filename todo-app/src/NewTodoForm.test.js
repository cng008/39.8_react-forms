import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import NewTodoForm from './NewTodoForm'

describe('<NewTodoForm /> rendering', () => {
  it('renders without crashing', function() {
    render(<NewTodoForm />)
  })

  it('matches snapshot', function() {
    const { asFragment } = render(<NewTodoForm />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('runs the create function on form submit', function() {
    const createMock = jest.fn()
    const { getByText } = render(<NewTodoForm addTodo={createMock} />)
    const createButton = getByText('+')
    fireEvent.click(createButton)
    expect(createMock).toHaveBeenCalled()
  })
})
