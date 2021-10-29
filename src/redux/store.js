import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
//import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

// Define array of middlewares
//const middlewares = [logger];
const middlewares = [thunk];
//Create store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

const persisting = {
    store,
    persistor
}

export default persisting;