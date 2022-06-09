import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BoxList from './BoxList'

function addBox(boxList, height = '5', width = '5', color = '000000') {
  const colorInput = boxList.getByLabelText('Color')
  const heightInput = boxList.getByLabelText('Height')
  const widthInput = boxList.getByLabelText('Width')
  const btn = boxList.getByText('Add Box')
  fireEvent.change(colorInput, { target: { value: color } })
  fireEvent.change(widthInput, { target: { value: width } })
  fireEvent.change(heightInput, { target: { value: height } })
  fireEvent.click(btn)
}

describe('<BoxList /> rendering', () => {
  it('renders without crashing', () => {
    render(<BoxList />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('can add a new box', () => {
    const boxList = render(<BoxList />)

    // no boxes yet
    expect(boxList.queryByText('x')).not.toBeInTheDocument()

    addBox(boxList)
    // expect(boxList.firstChild).toHaveClass('Box')

    // expect to see a box
    // fireEvent.mouseOver(boxList)
    const removeButton = boxList.getByText('x')
    expect(removeButton).toBeInTheDocument()
    expect(removeButton.parentElement).toHaveStyle(`
        width: 5em;
        height: 5em;
        background-color: #000000;
      `)
    // expect form to be empty
    // expect(boxList.getAllByDisplayValue('')).toHaveLength(3)
  })

  it('can remove a box', () => {
    const boxList = render(<BoxList />)
    addBox(boxList)

    const removeButton = boxList.getByText('x')

    // click the remove button and the box should be gone
    fireEvent.click(removeButton)
    // expect(removeButton).not.toBeInTheDocument()
  })
})
