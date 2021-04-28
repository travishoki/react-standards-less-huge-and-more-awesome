import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redux';

export default function configureStore(initialState = {}) {
  const store = compose(
    applyMiddleware(),
  )(createStore)(rootReducer, initialState);

  return store;
}
