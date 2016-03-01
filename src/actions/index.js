export const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';
export function setWindowSize(width) {
  let size = null;
  if (width < 481) {
    size= 'small';
  } else if (width < 769) {
    size = 'medium';
  } else if (width < 1025) {
    size = 'large';
  } else {
    size = 'x-large'
  }
  return {
    type: SET_WINDOW_SIZE,
    payload: size
  };
};
