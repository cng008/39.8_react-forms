import React from 'react'

/** display a div with a background color, width and height based on the props passed to it
 *
 *  * This has no state --- just three props
 *
 */

const Box = ({ id, backgroundColor, width, height }) => {
  const styles = {
    height: `${height}em`,
    width: `${width}em`,
    backgroundColor
  }
  return (
    <>
      <div className="Box" style={styles}></div>
    </>
  )
}
export default Box
