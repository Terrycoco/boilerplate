import { MOVE_TILE } from 'actions/index';
const INITAL_STATE = {
  tileArr: [1,2,3,4,5,6,7,8,'x'],
  xPos: 8
};

export default (state=INITIAL_STATE, action ) => {
  switch (action.type) {
    case MOVE_TILE: {
      return { ...state, }
    }
    default:
      return state;
  }
}

// import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';
// const INITIAL_STATE = {
//         all: [],
//         post: null
//       };
//
//
// export default (state=INITIAL_STATE, action) => {
//   switch (action.type) {
//     case FETCH_POSTS: {
//       return { ...state, all: action.payload.data };
//     }
//     case FETCH_POST: {
//       return {...state, post: action.payload.data };
//     }
//     case DELETE_POST: {
//       return {...state, post: null};
//     }
//     default:
//       return state;
//   }
//
// }
