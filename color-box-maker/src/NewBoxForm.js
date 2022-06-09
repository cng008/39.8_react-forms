import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './NewBoxForm.css'

/** render a form that when submitted
 *
 * creates a new Box.
 * should be able to specify the Box’s width, height, and background color.
 * When form is submitted, clear the input values
 *
 */

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    backgroundColor: '',
    width: '',
    height: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE)
  const handleChange = evt => {
    const { name, value } = evt.target
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    addBox({ ...formData, id: uuid() })
    // setFormData(INITIAL_STATE)
  }

  /** get random inputs */
  const getRandom = (min = 1, max = 15) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  const generate = () => {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16) // https://css-tricks.com/snippets/javascript/random-hex-color/
    setFormData({
      backgroundColor: color,
      width: getRandom(),
      height: getRandom()
    })
    addBox({ ...formData, id: uuid() })
  }

  return (
    <>
      <form className="NewBoxForm" onSubmit={handleSubmit}>
        <label htmlFor="backgroundColor" className="NewBoxForm-Label">
          Color
        </label>
        <input
          className="NewBoxForm-Input"
          id="backgroundColor"
          type="color"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
        <label htmlFor="width" className="NewBoxForm-Label">
          Width
        </label>
        <span>{formData.width}</span>
        <input
          className="NewBoxForm-Input"
          id="width"
          type="range"
          name="width"
          min="1"
          max="20"
          placeholder="Enter a number"
          value={formData.width}
          onChange={handleChange}
        />
        <label htmlFor="height" className="NewBoxForm-Label">
          Height
        </label>
        <span>{formData.height}</span>
        <input
          className="NewBoxForm-Input"
          id="height"
          type="range"
          name="height"
          min="1"
          max="20"
          placeholder="Enter a number"
          value={formData.height}
          onChange={handleChange}
        />
        <button>Add Box</button>
      </form>
    </>
  )
}

export default NewBoxForm
