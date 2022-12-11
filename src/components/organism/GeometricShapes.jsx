import React, { useEffect, useState } from "react";
import Triangle from "../atoms/Triangle";
import Square from "../atoms/Square";
import Circle from "../atoms/Circle";
import InputGroup from "../molecules/InputGroup";

export default function GeometricShapes() {
  const [data, setData] = useState({
    triangleColor: "#5cb85c",
    triangleSize: 50,

    circleColor: "#b85c98",
    circleSize: 30,

    squareColor: "#428bca",
    squareSize: 100,
  });

  useEffect(() => {
    if (
      data.triangleSize == data.circleSize &&
      data.triangleSize == data.squareSize
    ) {
      alert("todos los tamaños son iguales");
    }
  }, [data.triangleSize, data.circleSize, data.squareSize]);

  useEffect(() => {
    if (
      data.triangleColor === data.circleColor &&
      data.triangleColor === data.squareColor
    ) {
      alert("todos los colores son iguales");
    }
  }, [data.triangleColor, data.circleColor, data.squareColor]);

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
    <>
      <InputGroup
        idNumber="triangle-size"
        idColor="triangle-color"
        onChange={handleChange}
        nameColor="triangleColor"
        nameSize="triangleSize"
        valueColor={data.triangleColor}
        valueSize={data.triangleSize}
      />
      <Triangle color={data.triangleColor} size={data.triangleSize} />
      <InputGroup
        idNumber="circle-size"
        idColor="circle-color"
        onChange={handleChange}
        nameColor="circleColor"
        nameSize="circleSize"
        valueColor={data.circleColor}
        valueSize={data.circleSize}
      />
      <Circle color={data.circleColor} size={data.circleSize} />
      <InputGroup
        idNumber="square-size"
        idColor="square-color"
        onChange={handleChange}
        nameColor="squareColor"
        nameSize="squareSize"
        valueColor={data.squareColor}
        valueSize={data.squareSize}
      />
      <Square color={data.squareColor} size={data.squareSize} />
    </>
  );
}
