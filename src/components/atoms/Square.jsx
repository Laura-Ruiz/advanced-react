import React from 'react'
import PropTypes from 'prop-types'

export default function Square({size, color}) {
  return (
    <svg width={size} height={size}>
    <rect x="1" y="2" width={size} height={size} fill={color}/>
    </svg>
  )
}

Square.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}