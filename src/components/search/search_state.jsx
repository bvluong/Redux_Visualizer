import React from 'react';

class SearchState extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userInput } = this.props.componentState;
    return (
      <div className="search-state">
        <h3>State</h3>
        <span>userInput: </span><span className='highlight'>{' ' + userInput }</span>
      </div>
    );
  }
}

export default SearchState;
