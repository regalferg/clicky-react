import React from "react";

class Counter extends React.Component {
  state = {
    count: 10
  };

  // Boom = (props) => {
  //   return <img  alt ="test" src="https://image.freepik.com/free-vector/boom_1308-2927.jpg" />;
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count <= 0) {
      this.setState({ count: this.state.count = 10 });
    }
  }

  render() {
    return (
      <nav class="navbar"><ul><li class="brand">
      <a href="/">Clicky Game</a></li><li class="">Click an image to begin!</li>
      <li>Score: 0 | Top Score: 0</li></ul></nav>
      <header class="header">
      <h1>Clicky Game!</h1>
      <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </header>
     
      <footer class="footer"><div class="bottom">Clicky Game! <img alt="react" src="assets/images/react.svg"></img></div>
      </footer>
      <div className="panel panel-primary">
        <div className="panel-heading">Click Counter!</div>
        <div className="panel-body text-center">
          <p>Click Count: {this.state.count}</p>
          
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Decrement
          </button>
          {/* <Boom />; */}
        </div>
      </div>
    );
  }
}

export default Counter;
