import React from "react";

export default function Button({color}){
   const defaultColor = "black";
   const buttonType = {
    primary:"green",
    secondary:"purple",
    ternary:"red"
   }
   return <button style={{background:buttonType[color]||defaultColor}}>Click Me</button>
} 