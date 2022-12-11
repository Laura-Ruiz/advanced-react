import React from 'react'
import PropTypes from 'prop-types'

export default function InputNumber({value, id, name, onChange}) {
  return (
    <input
    type="number"
    value={value}
    id={id}
    name={name}
    onChange={onChange}
    />
  )
}

InputNumber.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
}