import React from "react";
import ColorItem from "./ColorItem"

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return(  colors.map((color) => {
    return <ColorItem key={color} color={color} />
}))

}

export default ColorList;
