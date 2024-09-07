import React, { Component } from 'react';
import Welcome from './components/Welcome';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
  
  }


  render() {
    return (
      <>
        <h1>React Component Lifecycle</h1>
        <div className="card">
          
          <button onClick={this.mountCounter}>Mount</button>
          <button onClick={this.unmountCounter}>Unmount</button>
          {this.state.mount ? <Welcome /> : null}
        </div>
      </>
    );
  }
}

export default App;