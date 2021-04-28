import { combineReducers } from 'redux';

import basicReducer from './reducers/settings';

const rootReducer = combineReducers({
  basicReducer,
});

export default rootReducer;
