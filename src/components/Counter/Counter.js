import React from "react";
import "./Counter.css";


const Counter = props=> 
 
 (
      <div id="main">
      <nav className="navbar"><ul><li className="brand">
      <a href="/">Clicky Game</a></li><li className="">Click an image to begin!</li>
      <li>Score: {props.count} | Top Score: 0</li></ul></nav>
    
     
      </div>
     
     
      
    );


export default Counter;
