import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Todo from './Todo'
import '@testing-library/jest-dom/extend-expect'

describe('<Todo /> rendering', () => {
  it('renders without crashing', function() {
    render(<Todo />)
  })

  it('matches snapshot', function() {
    const { asFragment } = render(<Todo />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches snapshot when editing', function() {
    const { asFragment, getByTestId } = render(<Todo />)
    const editButton = getByTestId('Edit')
    fireEvent.click(editButton)
    expect(asFragment()).toMatchSnapshot()
  })

  it('runs the update function on form submit', function() {
    const updateMock = jest.fn()
    const { getByTestId, getByText } = render(<Todo update={updateMock} />)
    const editButton = getByTestId('Edit')
    fireEvent.click(editButton)
    const updateButton = getByText('Save')
    fireEvent.click(updateButton)
    expect(updateMock).toHaveBeenCalled()
  })

  it('runs the delete function on button click', function() {
    const removeMock = jest.fn()
    const { getByTestId } = render(<Todo remove={removeMock} />)
    const deleteButton = getByTestId('Remove')
    fireEvent.click(deleteButton)
    expect(removeMock).toHaveBeenCalled()
  })
})
