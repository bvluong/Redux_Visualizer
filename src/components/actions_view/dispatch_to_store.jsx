import React from 'react';

class DispatchToStore extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    if (!this.props.currentComponents.includes('dispatch-to-store')) {
      return (<div className='receive-action-container'></div>);
    }

    let url = '';
    if (this.props.searchResult.data){
      url = this.props.searchResult.data[0].url;
    }

    return (
      <div className='receive-action-container onesec'>
        <svg width='300px'>
          <path d="M150.5,0 Q200 80 300,125"
            fill="none"
            stroke="#be2826"
            strokeWidth="5px" />
          <path d="M155,0 Q200 80 300,125"
            fill="none"
            stroke="#be2826"
            strokeWidth="5px" />
          <path d="M300,125 Q285 115 280,90"
            fill="none"
            stroke="#be2826"
            strokeWidth="3px" />
          <path d="M300,125 Q285 115 282,90"
              fill="none"
              stroke="#be2826"
              strokeWidth="3px" />
          <path d="M300,125 Q285 115 259,130"
              fill="none"
              stroke="#be2826"
              strokeWidth="3px" />
          <path d="M300,125 Q285 115 260,131"
                fill="none"
                stroke="#be2826"
                strokeWidth="3px" />
        </svg>
        <div className='receive-action-text'>
          <h2 className='action-head'>Receive Gif!</h2>
          <div className='action-bkg'></div>
          <pre className='code-snippet'>
            <code >{`
receiveGiphy = gif => ({
  type: RECEIVE_GIPHY,
  payload: ${url}
})
                `}
              </code>
            </pre>
        </div>
      </div>
    );
  }
}

export default DispatchToStore;
