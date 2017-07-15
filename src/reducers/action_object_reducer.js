import { RECEIVE_ACTION_OBJECT } from '../actions/meta_actions';

const actionObjectReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTION_OBJECT:
      return action.actionObject;
    default:
      return state;
  }
};

export default actionObjectReducer;
