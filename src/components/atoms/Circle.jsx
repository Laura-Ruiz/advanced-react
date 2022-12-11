import React from "react";
import PropTypes from "prop-types";

export default function Circle({ size, color }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={`${size}px`}
      height={`${size}px`}
    >
      <circle cx="60" cy="60" r="50" fill={color} />
    </svg>
  );
}

Circle.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
