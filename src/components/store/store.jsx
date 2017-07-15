import React, { Component } from 'react';
import Reducer from './reducer_view';
import StoreState from './store_state';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = { currentReducer : null };
  }

  setCurrentReducer (id) {
    return function () {
      this.setState({ currentReducer: id });
    }.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentComponents[newProps.currentComponents.length - 1] === 'store') {
      setTimeout(this.setCurrentReducer(0), 200);
      setTimeout(this.setCurrentReducer(1), 1500);
      setTimeout(this.setCurrentReducer(2), 2800);
      setTimeout(this.setCurrentReducer(null), 4100);
      setTimeout(
        () => {
          newProps.addCurrentComponent('arrow-to-props');
        }, 4100);
    }
  }

  render() {
    if (!this.props.currentComponents.includes('store')) {
      return (<section className='store'></section>);
    }

    const { currentReducer } = this.state;
    return (
      <section className='store onesec'>
        <div className='reducers'>
          <Reducer currentReducer={currentReducer} name='session' />
          <Reducer currentReducer={currentReducer} name='giphys' />
          <Reducer currentReducer={currentReducer} name='likes' />
        </div>
        <StoreState
          currentReducer={currentReducer}
          searchResult={this.props.searchResult.data}/>
      </section>
    );
  }
}

export default Store;
