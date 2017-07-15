import React from "react";
import SearchProps from './search_props';
import SearchState from './search_state';
import SearchResultView from './search_result_view';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      disabled: false
    };
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  updateHandler(e) {
    e.preventDefault;
    this.setState({userInput: e.target.value});
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState({disabled: true});
    this.props.updateSearchTerm(this.state.userInput);
    if (this.props.currentComponents.length > 0){
      this.props.clearCurrentComponents();
      setTimeout(() => this.props.addCurrentComponent("actions_view"), 750);
    } else {
      this.props.addCurrentComponent("actions_view");
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.currentComponents[newProps.currentComponents.length-1] === 'search') {
      this.setState({disabled: false});
    }
  }
 
  render() {
    const { userInput, disabled } = this.state;
    return (
      <section className="search">
        <div className="component-state">
          <SearchState componentState={ this.state } />
          <SearchProps componentProps={ this.props } />
        </div>
        <div className="user-component">
          <form className="search-submit" onSubmit={this.submitHandler}>

            <input className="search-bar"
              type="text"
              placeholder="feelin' brave?"
              onChange={this.updateHandler}
              disabled={disabled}
              value={ userInput }
              />
            <input className="submit-button"
              type="submit"
              disabled={disabled}
              value="search"/>
          </form>
          <SearchResultView
            currentComponents={this.props.currentComponents}
            searchResult={this.props.searchResult}/>
        </div>
      </section>
    );
  }
}

export default Search;
