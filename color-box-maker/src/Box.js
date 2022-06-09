import React from 'react'

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
  const remove = () => handleRemove(id)

  return (
    <>
      <div className="Box" style={styles} onClick={remove}></div>
    </>
  )
}
export default Box
