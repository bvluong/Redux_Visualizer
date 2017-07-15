import React from 'react';

export default ({ searchResult, currentReducer }) => {
  // backticks pick up indentation!!
  let stateStr =`{
  gipys: {}
}`;
  if (searchResult && currentReducer !== 0) {
    // let id = Math.floor(Math.random() * 10);
    let id = 1;
    stateStr =`{
  giphys: {
    ${id}: {
      id: ${id},
      url: ${searchResult[0].embed_url}
    }
  }
}`;
  }

  let className = 'state-preview';
  if (currentReducer !== null) {
    className += ` store-${currentReducer}`;
  }

  return (
    <div className='store-state'>
      <h3>Store State</h3>
      <pre className={className}>
        <code>
          { stateStr}
        </code>
      </pre>
    </div>
  );
};
