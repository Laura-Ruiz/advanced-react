import React from "react";

export default function Circle({ color, size }) {
  // En lugar de CSS utiliza SVG y comprueba las props con PropTypes
  const styleCircle = {
    backgroundColor: color,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
  };
  return <div style={styleCircle}></div>;
}
