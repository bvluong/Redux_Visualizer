import { RECEIVE_SEARCH_TERM } from '../actions/search_actions';

const searchTermReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_TERM:
      return action.searchTerm;
    default:
      return state;
  }
};

export default searchTermReducer;
