import React, { useState } from 'react'
import './Box.css'

/** display a div with a background color, width and height based on the props passed to it
 *
 *  * This has no state --- just three props
 *
 */

const Box = ({ id, backgroundColor, width, height, handleRemove }) => {
  const styles = {
    height: `${height}em`,
    width: `${width}em`,
    backgroundColor
  }
  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => setIsHovering(true)
  const handleMouseOut = () => setIsHovering(false)
  const remove = () => handleRemove(id)

  return (
    <>
      <div
        className="Box"
        data-testid="Box"
        style={styles}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={remove}
      >
        {isHovering && <span>x</span>}
        {/* <span>x</span> */}
      </div>
    </>
  )
}
export default Box
