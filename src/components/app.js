import React, { Component } from 'react';
import ActionsViewContainer from './actions_view/actions_view_container';
import SearchContainer from './search/search_container';

import ArrowToPropsContainer from './arrow_to_props/arrow_to_props_container';

import StoreContainer from './store/store_container';

export default class App extends Component {
  render() {
    return (
      <div className='main-div'>
        <h1 className='title'>The Redux Cycle!</h1>
        <ActionsViewContainer />
        <SearchContainer/>
        <ArrowToPropsContainer/>
        <StoreContainer />
      </div>
    );
  }
}
