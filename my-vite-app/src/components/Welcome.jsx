import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  render() {
    console.log('Render');
    return (
      <>
        <h1>This is a class component {this.state.counter}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("Component Did Update");
    }
  }
  componentWillUnmount(){
    console.log("component will unmount");
    console.log(" -----------------------")
  }
}

export default Welcome;