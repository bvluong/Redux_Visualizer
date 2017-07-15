import React from 'react';

class SearchProps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let searchString = '';
    const { searchResult, currentComponents } = this.props.componentProps;

    if (searchResult && currentComponents[currentComponents.length-1] === 'search'){
      searchString = searchResult.data[0].embed_url.slice(8);
      if (searchString.length > 17) {
        searchString = searchString.slice(0,17) + '...';
      }
    }

    return (
      <div className="search-props">
       <h3> Props </h3>
        <p> Methods: fetchGiphy </p>
        <p> Objects: searchResults </p>
          <span>{'{ url: '}<span className="highlight">{searchString}</span>{' }'}</span>
      </div>
    );
  }
}

export default SearchProps;
