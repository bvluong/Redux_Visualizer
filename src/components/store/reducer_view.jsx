import React from 'react';

export default ({ currentReducer, name }) => {
  const reducers = ['session', 'giphys', 'likes'];
  let className = 'reducer';
  if (reducers[currentReducer] === name) {
    className += ` current-reducer-${currentReducer}`;
  }
  return (
    <div className={ className }>{ name } Reducer</div>
  );
};
