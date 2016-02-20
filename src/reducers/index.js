import { combineReducers } from 'redux';
// import ExampleReducer from 'reducers/exampleReducer';


const rootReducer = combineReducers({
state: (state = {}) => state   //passthrough state - delete when have real reducer
 // stateSection: ExampleReducer
});

export default rootReducer;
