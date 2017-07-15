import { connect } from 'react-redux';
import { receiveSearchTerm } from '../../actions/search_actions';
import { receiveCurrentComponent, clearCurrentComponents } from '../../actions/meta_actions';
import Search from './search';

const mapStateToProps = ({ searchResult, currentComponents }) => ({
  searchResult,
  currentComponents
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchTerm: (searchTerm) => dispatch(receiveSearchTerm(searchTerm)),
  addCurrentComponent: (name) => dispatch(receiveCurrentComponent(name)),
  clearCurrentComponents: () => dispatch(clearCurrentComponents())
});

export default connect(mapStateToProps,mapDispatchToProps)(Search);
