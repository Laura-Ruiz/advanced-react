import { useState, useEffect } from "react";
import Circle from "./components/Circle";
import Square from "./components/Square";
import Triangle from "./components/Triangle";

function App() {

   const [data, setData] = useState({
    triangleColor: "#5cb85c",
    triangleSize: 50,
  
    circleColor:"#b85c98",
    circleSize: 30,

    squareColor: "#428bca",
    squareSize: 100
})

   function handleChange(e){
    const {name, value} = e.target
      setData(prevFormData => {
      return {
        ...prevFormData,
        [name]:value
      }
    })
    
   }
   useEffect(() => {
    if(data.triangleSize == data.circleSize && data.triangleSize == data.squareSize){
      alert("todos los tamaños son iguales")
    }
   }, [data.triangleSize, data.circleSize, data.squareSize])

   useEffect(() => {
    if(data.triangleColor === data.circleColor && data.triangleColor === data.squareColor){
      alert("todos los colores son iguales")
    }
   }, [data.triangleColor, data.circleColor, data.squareColor])
   
  return (
    <div>
      <h1>Ejercicio useState y useEffect</h1>
      <label>
        Size:
        <input type="number" name="triangleSize" value={data.triangleSize} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Color:
        <input type="color" name="triangleColor" value={data.triangleColor} onChange={(e) => handleChange(e)}  />
      </label>
      <div>
      <Triangle color={data.triangleColor} size={data.triangleSize}/>
      </div>
      <label>
        Size:
        <input type="number" name="circleSize" value={data.circleSize} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Color:
        <input type="color" name="circleColor" value={data.circleColor} onChange={(e) => handleChange(e)}  />
      </label>
     
      <Circle  color={data.circleColor} size={data.circleSize}/>
      
      <label>
        Size:
        <input type="number" name="squareSize" value={data.squareSize} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Color:
        <input type="color" name="squareColor" value={data.squareColor} onChange={(e) => handleChange(e)}  />
      </label>
      <Square color={data.squareColor} size={data.squareSize}/>
    </div>
  );
}

export default App;
