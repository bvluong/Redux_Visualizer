import { combineReducers } from 'redux';
import actionObjectReducer from './action_object_reducer';
import currentComponentsReducer from './current_components_reducer';
import searchTermReducer from './search_term_reducer';
import gifReducer from './gif_reducer';

export default combineReducers({
  actionObject: actionObjectReducer,
  currentComponents: currentComponentsReducer,
  searchTerm: searchTermReducer,
  searchResult: gifReducer
});
