import { connect } from 'react-redux';
import ArrowToProps from './arrow_to_props';
import { receiveCurrentComponent } from '../../actions/meta_actions';

const mapStateToProps = state => ({
  currentComponents: state.currentComponents,
  searchResult: state.searchResult
});

const mapDispatchtoProps = dispatch => ({
  addCurrentComponent: (name) => dispatch(receiveCurrentComponent(name))
});


export default connect(mapStateToProps, mapDispatchtoProps)(ArrowToProps);
