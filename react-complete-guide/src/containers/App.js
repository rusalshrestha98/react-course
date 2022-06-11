import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass'
import AuthContext from '../context/auth-context'

class App extends Component {
  // INITIAL STATE DECLARATIONS
  state = {
    persons: [
      { id: 1, name: 'Max', age: 22 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    changeCounter: 0, 
    authenticated: false
  };

  // EVENT HANDLER TO HANDLE STATE CHANGES
  nameChangeHandler = (event, id) => {
    // find the index of the person we want to update
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    // make a copy of the person you are updating
    const person = {
      ...this.state.persons[personIndex]
    };

    // change the name of that person to the user's input
    person.name = event.target.value

    // make a copy of the current persons array
    const persons = [...this.state.persons]

    // update the single person element at the index with new updated person
    persons[personIndex] = person

    // set the state to the updated persons array
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
  }

  toggleNameHandler = () => {
    // store the current state in a variable
    const doesShow = this.state.showPersons
    // change the state to the opposite of the current state 'doesShow'
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    // VANILLA JS LOGIC TO DYNAMICALLY RENDER CSS Styles and Components
    // by default, the 'Person' components will not render
    let persons = null; 
    // if the 'showPersons' state is true, it will render the 'Person' components
    if (this.state.showPersons) { 
      persons = 
        <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
        />
    }

    // RETURN THE JSX
    return (
      <AuthContext.Provider value={{
        authenticated: this.state.authenticated,
        login: this.loginHandler
      }}>
        <WithClass classes={classes.App}>
          <Cockpit 
            title ={this.props.appTitle}
            persons={this.state.persons} 
            showPersons={this.state.showPersons}
            clicked={this.toggleNameHandler}
          />
          {persons}
        </WithClass>
      </AuthContext.Provider>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;