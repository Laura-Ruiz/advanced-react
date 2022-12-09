import { useState, useEffect } from "react";
import Circle from "./components/Circle";
import Square from "./components/Square";
import Triangle from "./components/Triangle";
import Input from "./components/Input";
function App() {

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

  return (
    <div>
      <h1>Ejercicio useState y useEffect</h1>
      <Input
        nameColor="triangleColor"
        nameSize="triangleSize"
        valueColor={data.triangleColor}
        valueSize={data.triangleSize}
        setData={setData}
      />
      <Triangle color={data.triangleColor} size={data.triangleSize} />
      <Input
        nameColor="circleColor"
        nameSize="circleSize"
        valueColor={data.circleColor}
        valueSize={data.circleSize}
        setData={setData}
      />
      <Circle color={data.circleColor} size={data.circleSize} />
      <Input
        nameColor="squareColor"
        nameSize="squareSize"
        valueColor={data.squareColor}
        valueSize={data.squareSize}
        setData={setData}
      />
      <Square color={data.squareColor} size={data.squareSize} />
    </div>
  );
}

export default App;
