import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: "rusalo101"
  }

  changeUsernameHandler = () => {
    this.setState({
      username: "epicPandaBOSS"
    })
  }

  updateUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <UserInput changed={this.updateUsernameHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username="sanish91" />
        <UserOutput username="hi_jm" />
      </div>
    );
  }
}

export default App;
