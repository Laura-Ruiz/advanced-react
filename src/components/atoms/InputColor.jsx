import React from 'react'
import PropTypes from 'prop-types'

export default function InputColor({value,id, name, onChange}) {
  return (
    <input
    type="color"
    value={value}
    id={id}
    name={name}
    onChange={onChange}/>
  )
}

InputColor.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
}