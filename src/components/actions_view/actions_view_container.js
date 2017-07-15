import { connect } from 'react-redux';
import { requestGif } from '../../actions/search_actions';
import { receiveCurrentComponent } from '../../actions/meta_actions';
import ActionsView from './actions_view';

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  searchResult: state.searchResult,
  currentComponents: state.currentComponents
});

const mapDispatchtoProps = (dispatch) => ({
  requestGif: searchTerm => dispatch(requestGif(searchTerm)),
  addCurrentComponent: (name) => dispatch(receiveCurrentComponent(name))
});

export default connect(mapStateToProps, mapDispatchtoProps)(ActionsView);
