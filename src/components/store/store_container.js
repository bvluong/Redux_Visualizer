import { connect } from 'react-redux';
import { receiveCurrentComponent } from '../../actions/meta_actions';
import Store from './store';

const mapStateToProps = state => ({
  searchResult: state.searchResult,
  currentComponents: state.currentComponents
});

const mapDispatchToProps = dispatch => ({
  addCurrentComponent: (name) => dispatch(receiveCurrentComponent(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Store);
