import { combineReducers } from 'redux';
import appReducer from 'reducers/appReducer';


const rootReducer = combineReducers({
// state: (state = {}) => state   //passthrough state - delete when have real reducer
 app: appReducer
});

export default rootReducer;
