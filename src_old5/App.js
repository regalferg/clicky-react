import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


remove = id => {
  const newFriends = this.state.friends.filter(friend => friend.id 
  !== id);

  this.setState({friends: newFriends});
 
}

const BradsSexyMap = friends.map(friend =>{
  return <FriendCard
  key={friend.name}
  remove= {this.remove}
  id ={friend.id}
    name={friend.name}
    image ={friend.image} 
    occupation ={friend.occupation} 
    location ={friend.location} 
  />
})


const App = () => (
  <Wrapper>
    {BradsSexyMap }
  </Wrapper>
);

export default App;
