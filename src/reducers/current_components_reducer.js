import {
  RECEIVE_CURRENT_COMPONENT,
  CLEAR_CURRENT_COMPONENTS
} from '../actions/meta_actions';

const currentComponentsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_CURRENT_COMPONENTS:
      return [];
    case RECEIVE_CURRENT_COMPONENT:
      let newState = Object.assign([], state);
      newState.push(action.componentName);
      return newState;
    default:
      return state;
  }
};

export default currentComponentsReducer;
