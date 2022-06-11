import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput: ""
  }

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  deleteCharHandler = (charIndex) => {
    const text = this.state.userInput.split('')
    text.splice(charIndex, 1)
    const updatedText = text.join('')
    this.setState({
      userInput: updatedText
    })
  }

  render() {
    const charList = this.state.userInput.split('').map((letter, index) => {
      return <Char 
        letter={letter} 
        key={index} 
        click={() => this.deleteCharHandler(index)} 
      />
    });

    return (
      <div className="App">
        <input 
        type="text" 
        onChange={(event) => this.inputChangedHandler(event)} 
        value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation textLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
