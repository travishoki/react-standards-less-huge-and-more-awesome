import { combineReducers } from 'redux';
import { basicReducer } from './basic-reducer';

const rootReducer = combineReducers({
  basicReducer,
});

export default rootReducer;
