import React from 'react'

export default function Input({nameColor, nameSize, valueColor, valueSize, setData}) {

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
    <input type="number" name={nameSize} value={valueSize} onChange={(e) => handleChange(e)} />
  </label>
  <label>
    Color:
    <input type="color" name={nameColor} value={valueColor} onChange={(e) => handleChange(e)}  />
  </label>
  </div>
  )
}
