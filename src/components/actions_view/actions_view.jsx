import React from 'react';
import DispatchActions from './dispatch_actions';
import Middleware from './middleware';
import DispatchToStore from './dispatch_to_store';

class ActionsView extends React.Component {
  constructor(props){
    super(props);

    this.state = {currentChild: null};
  }

  setCurrentChild (name) {
    return function () {
      this.setState({ currentReducer: name });
    }.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentComponents[newProps.currentComponents.length - 1] === 'actions_view') {
      setTimeout(() => newProps.addCurrentComponent('dispatch-actions'), 100);
      setTimeout(() => newProps.addCurrentComponent('middleware'), 800);
    }
  }

  render(){
    return(
      <div className="actions-view">
        <DispatchActions
          currentComponents={this.props.currentComponents}
          searchTerm={this.props.searchTerm}/>
        <Middleware
          searchResult={this.props.searchResult}
          addCurrentComponent={this.props.addCurrentComponent}
          currentComponents={this.props.currentComponents}
          requestGif={this.props.requestGif}
          searchTerm={this.props.searchTerm}/>
        <DispatchToStore
          currentComponents={this.props.currentComponents}
          searchResult={this.props.searchResult}/>
      </div>
    );

  }
}

export default ActionsView;
