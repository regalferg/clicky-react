import React from "react";
import "./FriendCard.css";
import App from "./App";



const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
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
          <strong>Address:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span className="remove" onClick={() => props.remove(props.id)}>𝘅</span>
  </div>
);

export default FriendCard;
