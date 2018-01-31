import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';

// Combine reducers into rootReducer
const rootReducer = combineReducers({
  places: placesReducer
});

let composeEnhancers = compose;

// __DEV__ is a variable that React native creates
if(__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;