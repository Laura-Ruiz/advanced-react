import React from 'react'

export default function Circle({color, size}) {

    const styleCircle = {
      backgroundColor: color,
      width: `${size}px`, 
      height:`${size}px`,
      borderRadius: "50%",
    }
  return (
    
    <div style={styleCircle}></div>
   
    )
}
