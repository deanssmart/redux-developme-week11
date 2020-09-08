import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

const initial = {
  player1: 0,
  player2: 0,
  player1Serving: true,
  winner: 0,
};

const server = (state) => {
  return { 
    ...state, 
    player1Serving: (state.player1 + state.player2) % 5 === 0 ? !state.player1Serving : state.player1Serving
  }
};

const score = (state, { player }) => {
  return { 
    ...state, 
    [player]: state[player] + 1, 
  }
};

const winner = (state) => {
  return {
    ...state,
    winner: 
      state.player1 >= 21 && state.player1 - state.player2 >= 2 ? 1 : (state.player2 >= 21 && state.player2 - state.player1 >= 2 ? 2 : 0)    
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

const render = () => {
  let state = store.getState();

  ReactDOM.render(
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
