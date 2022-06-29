// import redux using node.js because its a 3rd party library
const redux = require('redux');

// REDUCER FUNCTION
// inputs: old state (must have a default value so it works the first time when app state is initialized) + action
// output: new state object
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }
  return state;
};

// CENTRAL STORE
// the store needs to know which reducer is responsible for updating the central store
const store = redux.createStore(counterReducer);

// SUBSCRIBED COMPONENT
const counterSubscriber = () => {
  // access the central store using a redux method called getState()
  const latestState = store.getState();
  console.log(latestState);
};
// tells redux to execute this function whenever our state changes using the redux method called suscribe()
store.subscribe(counterSubscriber);

// DISPATCH ACTION
// action: a javascript object with a type property for specifying the operation
// this is done using the redux method called dispatch()
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });