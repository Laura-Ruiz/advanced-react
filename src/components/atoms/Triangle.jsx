import React from 'react'
import PropTypes from 'prop-types'

export default function Triangle({size, color}) {

  const points = `${size/2},0 0,${size} ${size},${size}`
  return (
    <svg width={size} height={size}>
        <polygon points={points} fill={color}></polygon>
    </svg>
  )
 
}

Triangle.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}
