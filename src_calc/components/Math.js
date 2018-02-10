import React from "react";

const Math = props =>{

    let result;

    switch (props.operator) {
      case "+":
        result = props.num1 + props.num2;

        break;
      case "-":
        result = props.num1 - props.num2;

        break;
      case "*":
        result = props.num1 * props.num2;

        break;
      case "/":
        result = props.num1 / props.num2;

        break;
      default:
        result = NaN;
        break;
    }
    return(
        <span>{result} </span>
    //   sum => {
    //     return a + b;
    //   }
    )
  }
  
  export default Math;