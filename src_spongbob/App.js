import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import FriendCard from "./components/FriendCard/FriendCard";
import friends from "./friends.json";
const List = friends.map(friend =>{
  return <FriendCard
  key={friend.name}
    name={friend.name}
    image ={friend.image} 
    occupation ={friend.occupation} 
    location ={friend.location} 
  />
})
const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    {List}
    {/* <FriendCard 
    name ={friends[0].name} 
    image ={friends[0].image} 
    occupation ={friends[0].occupation} 
    location ={friends[0].location} 
    />
    <FriendCard 
    name ={friends[1].name} 
    image ={friends[1].image} 
    occupation ={friends[1].occupation} 
    location ={friends[1].location} 
    />
    <FriendCard 
    name ={friends[2].name} 
    image ={friends[2].image} 
    occupation ={friends[2].occupation} 
    location ={friends[2].location} 
    />
     <FriendCard 
    name ={friends[3].name} 
    image ={friends[3].image} 
    occupation ={friends[3].occupation} 
    location ={friends[3].location} 
    /> */}
  </Wrapper>
);

export default App;
