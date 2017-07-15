import React from 'react';

class Middlware extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchTerm !== newProps.searchTerm) {
      newProps.requestGif(newProps.searchTerm);
    }
  }

  componentDidUpdate(){
    if (this.props.searchResult.data &&
      this.props.currentComponents[this.props.currentComponents.length-1] === 'middleware'){
      setTimeout( () => this.props.addCurrentComponent('dispatch-to-store'), 5000);
      setTimeout( () => this.props.addCurrentComponent('store'), 6000);
    }
  }

  render(){
    if (!this.props.currentComponents.includes('middleware')) {
      return (<div className='middleware-container'></div>);
    }

    return (
      <div className='middleware-container'>
        <div className='giphy-api twosec'>
          <img src='https://thegiforacle.com/img/giphy.gif' />
        </div>
        <h2 className='grid-title action-head'>Thunk Middleware!</h2>
          <div className='out-arrow onesec slideleft'>
            <img src="http://res.cloudinary.com/djrgebhxz/image/upload/a_225/v1498418195/rocket2_tclx6d.png"/>
          </div>
          <div className='out-snippet onesec slideleft'>
            <pre>
              <code>{`
fetch(${this.props.searchTerm} gifs)
              `}
              </code>
            </pre>
          </div>
          <div className='in-arrow foursec slideright'>
            <img src="http://res.cloudinary.com/djrgebhxz/image/upload/a_45/v1498418195/rocket2_tclx6d.png"/>
          </div>
          <div className='in-snippet foursec slideright thought-bkg'></div>
          <div className='in-snippet foursec slideright'>
            <pre>
              <code>{`
1: {
  type: gif
  url: giphy.com/${this.props.searchTerm}
}
                `}
              </code>
            </pre>
          </div>
      </div>
    );
  }
}

export default Middlware;
