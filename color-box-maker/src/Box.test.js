import React from 'react'
import { render } from '@testing-library/react'
import Box from './Box'

describe('<Box /> rendering', () => {
  it('renders without crashing', function() {
    render(<Box />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Box />)
    expect(asFragment()).toMatchSnapshot()
  })
})
