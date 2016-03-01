import { SET_WINDOW_SIZE} from 'actions/index';

const INITIAL_STATE = {
  windowSize: null
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_WINDOW_SIZE: {
      return Object.assign({}, state, { windowSize: action.payload });
    }
    default:
      return state;
  }
};
