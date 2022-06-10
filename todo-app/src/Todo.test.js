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
})
