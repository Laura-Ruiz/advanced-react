import React from "react";

// Crea dos inputs, InputNumber y InputColor en atoms
// Crea un Label en atoms, pasale el htmlFor
// Crea un InputNumberGroup que los combine ambos (Label y InputNumber|InputColor)
// Este componente es un organismo por como lo has planteado
export default function Input({
  nameColor,
  nameSize,
  valueColor,
  valueSize,
  setData,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <label>
        Size:
        {/* Tal como esta el onChange, puede ser onChange={handleChange} o mejor onChange={onChange} y que venga desde el padre */}
        <input
          type="number"
          name={nameSize}
          value={valueSize}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Color:
        <input
          type="color"
          name={nameColor}
          value={valueColor}
          onChange={(e) => handleChange(e)}
        />
      </label>
    </div>
  );
}
