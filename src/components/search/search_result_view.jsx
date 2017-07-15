import React, { Component } from 'react';

class SearchResultView extends Component {

  mapGiphys(searchResult) {

  }

  render() {
    if (this.props.currentComponents[this.props.currentComponents.length - 1] !== 'search'){
      return (<div className='display-giphys'></div>);
    }

    return (
      <div className='display-giphys'>
          <iframe className='giphy-result' src={this.props.searchResult.data[0].embed_url}/>
      </div>
    );
  }
}

export default SearchResultView;
