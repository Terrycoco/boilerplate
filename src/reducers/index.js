import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  //passthrough state - delete when have real reducer
 state: (state = {}) => state
});

export default rootReducer;
