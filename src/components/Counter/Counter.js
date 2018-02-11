import React from "react";
import "./Counter.css";


const Counter = props=> 
 
 (
      <div id="main">
      <nav className="navbar"><ul><li className="brand">
      <a href="/clicky-react/">Clicky Game</a></li><li className="">Click an image to begin!</li>
      <li>Score: {props.count} | Top Score:{props.top}</li></ul></nav>
    
     
      </div>
     
     
      
    );


export default Counter;
