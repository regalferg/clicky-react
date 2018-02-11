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
    top:0,
    shake:0,
    newList:[]
  };
 

  sortFriend = id => {

    const friends = this.state.friends.sort(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    this.setState({ friends });

    this.setState({ count: this.state.count + 1 });
    // this.setState({ top: this.state.top + 1 });
  
    
    if (this.state.count >= this.state.top) {
      this.setState({ top: this.state.top + 1 });
      
    }

    
    this.setState({newList:this.state.newList.concat(id)
    }, () => console.log(this.state.newList) );
    
    if (this.state.newList.find((e) => e === id) ) {
     
      console.log("Boom");
      this.setState(state =>({count: state.count = 0 }));
      this.setState(state =>({newList: state.newList = [] }));
    }

  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     
      <Wrapper>
         <Counter
          count={this.state.count}
          top={this.state.top}/>
        <Title>Friends List</Title>
       
        {this.state.friends.map(friend => (
          <FriendCard
            key={friend.id}
            id={friend.id}
            shake={this.state.shake}
            sortFriend={this.sortFriend}
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
