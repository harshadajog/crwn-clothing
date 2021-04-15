import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// Define array of middlewares
const middlewares = [logger];

//Create store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;