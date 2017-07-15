import { RECEIVE_GIF } from '../actions/search_actions';

const gifReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // will need to change this if we store multiple giphys
    case RECEIVE_GIF:
      return action.gif;
    default:
      return state;
  }
};

export default gifReducer;
