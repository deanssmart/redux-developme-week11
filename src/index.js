import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initial = {
  player1: 0,
  player2: 0,
  player1Serving: true,
  winner: 0,
};

const alternate = (state) => {
  return (state.player1 >= 20 && state.player2 >= 20) ? 2 : 5;  
}

const server = (state) => {
  const total = state.player1 + state.player2;

  return { 
    ...state, 
    player1Serving: total % alternate(state) === 0 ? !state.player1Serving : state.player1Serving
  }
};

const score = (state, { player }) => {
  return { 
    ...state, 
    [player]: state[player] + 1, 
  }
};

const player1Wins = (state) => {
  return state.player1 >= 21 && state.player1 - state.player2 >= 2;
};

const player2Wins = (state) => {
  return state.player2 >= 21 && state.player2 - state.player1 >= 2;
};

const winner = (state) => {
  return {
    ...state,
    winner: player1Wins(state) ? 1 : (player2Wins(state) ? 2 : 0)    
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SCORE": return winner(server(score(state, action)));
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

let state = store.getState();

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App
        scoreP1={ state.player1 }
        handleP1={ () => store.dispatch({ type: "SCORE", player: "player1" })}
        scoreP2={ state.player2 }
        handleP2={ () => store.dispatch({ type: "SCORE", player: "player2" })}
        handleReset={ () => store.dispatch({ type: "RESET" })}
        player1Serving={ state.player1Serving }
        winner={ state.winner }
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
