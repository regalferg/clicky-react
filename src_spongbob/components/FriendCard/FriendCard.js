import React from "react";
import "./FriendCard.css";

class Remove extends React.Component {
  state = {
    clicked:false
  };


render(){
  return (
  <div className="card">
    <div className="img-container">
      <img
        alt="SpongeBob"
        src={props.image}/>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
  </div>
  );
}







export default Remove;
