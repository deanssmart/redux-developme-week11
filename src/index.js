import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import store from './data/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App
        handleReset={ () => store.dispatch({ type: "RESET" })}
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);


