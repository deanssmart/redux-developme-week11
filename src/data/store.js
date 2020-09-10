import { createStore, applyMiddleware, compose } from 'redux';
// import persistState from 'redux-localstorage';   
import thunk from 'redux-thunk';

import reducer from './reducer';
import initial from './initial';

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initial,
    // composeEnhancers(persistState())  use with persist state for local storage
    composeEnhancers(applyMiddleware(thunk))
  );
  
export default store;