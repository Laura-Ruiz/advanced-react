import React from "react";
import PropTypes from 'prop-types'

export default function Label({htmlFor, title}) {
  return <label htmlFor={htmlFor}>{title}</label>
}

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    title: PropTypes.string
}