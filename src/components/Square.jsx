import React from 'react'

export default function Square({color, size}) {

  const styleSquare = {
    backgroundColor: color, 
    height: `${size}px`, 
    width: `${size}px`
  }
  return (
    <div style={styleSquare}></div>
)
}
