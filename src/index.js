import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import store from './data/store';
import { Provider } from 'react-redux';

let state = store.getState();

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App
        handleP1={ () => store.dispatch({ type: "SCORE", player: "player1" })}
        handleP2={ () => store.dispatch({ type: "SCORE", player: "player2" })}
        handleReset={ () => store.dispatch({ type: "RESET" })}
        winner={ state.winner }
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);


