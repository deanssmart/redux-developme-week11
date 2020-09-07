import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

const initial = {
  player1: 0,
  player2: 0,
  serving: true,
};

const server = (state) => {
  return { 
    ...state, 
    serving: (state.player1 + state.player2) % 5 === 0 ? !state.serving : state.serving
  }
}

const incrementP1 = (state) => {
  return { ...state, player1: state.player1 + 1 };
}

const incrementP2 = (state) => {
  return { ...state, player2: state.player2 + 1 };
}

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_P1": return server(incrementP1(state));
    case "INCREMENT_P2": return server(incrementP2(state));
    case "RESET": return initial;
    default: return state;
  }
};

const store = createStore(
  reducer, 
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App
        scoreP1={ state.player1 }
        handleIncrementP1={ () => store.dispatch({ type: "INCREMENT_P1" })}
        scoreP2={ state.player2 }
        handleIncrementP2={ () => store.dispatch({ type: "INCREMENT_P2" })}
        handleReset={ () => store.dispatch({ type: "RESET" })}
        serving={ state.serving }
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}

store.subscribe(render);
render();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
