import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Counter from "./components/Counter";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
  };
 

  sortFriend = id => {

    const friends = this.state.friends.sort(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    this.setState({ friends });

    this.setState({ count: this.state.count + 1 });
    if (this.state.count <= 1) {
      console.log("Boom");
      // this.setState({ count: this.state.count = 0 });
    }

  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     
      <Wrapper>
         <Counter
          count={this.state.count}/>
        <Title>Friends List</Title>
       
        {this.state.friends.map(friend => (
          <FriendCard
            sortFriend={this.sortFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
