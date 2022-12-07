import React from 'react'

export default function Triangle({color, size}) {

    console.log("color", color, size)
    const styleTriangle = {
      width: 0,
      borderLeft: `${size}px solid transparent`,
      borderRight: `${size}px solid transparent`,
      borderBottom: `${size * 2}px solid ${color}`,
    }
    
    
  return (
    <div style={styleTriangle}></div>
    )
}
