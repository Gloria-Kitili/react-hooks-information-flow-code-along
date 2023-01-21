import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const[childrenColor,setChildrenColor] =useState("#FFF");

  function setChangeColor(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color ={childrenColor} onChangeColor = {setChangeColor}/>
      <Child color ={childrenColor} onChangeColor = {setChangeColor} />
    </div>
  );
}

export default Parent;
