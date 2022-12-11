import React from "react";
import PropTypes from "prop-types";
import InputColor from "../atoms/InputColor";
import InputNumber from "../atoms/InputNumber";
import Label from "../atoms/Label";

export default function InputGroup({
  idNumber,
  idColor,
  nameColor,
  nameSize,
  valueSize,
  valueColor,
  onChange,
}) {
  return (
    <div>
      <Label htmlFor={idNumber} title="Size" />
      <InputNumber
        id={idNumber}
        name={nameSize}
        onChange={onChange}
        value={valueSize}
      />
      <Label id={idColor} htmlFor={nameColor} title="Color" />
      <InputColor id={idColor} name={nameColor} onChange={onChange} value={valueColor} />
    </div>
  );
}

InputGroup.propTypes = {
  nameColor: PropTypes.string,
  nameSize: PropTypes.string,
  valueSize: PropTypes.number,
  valueColor: PropTypes.number,
  onChange: PropTypes.func,
};
