import React from 'react';

class DispatchActions extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if (!this.props.currentComponents.includes('dispatch-actions')) {
      return (<div className='dispatch-action-container'></div>);
    }

    return (
      <div className='dispatch-action-container onesec'>
        <div className='dispatch-action-text'>
          <h2 className='action-head'>Dispatch Action!</h2>
          <div className='action-bkg'></div>
          <pre
            className='code-snippet'>
            <code>{`
fetchGiphy = ${this.props.searchTerm} => ({
  type: FETCH_GIPHY,
  payload: ${this.props.searchTerm}
})
                `}
              </code>
            </pre>
        </div>
        <svg width='300px'>
          <path d="M300,10 Q175 55 200,150"
                fill="none"
                stroke="#be2826"
                strokeWidth="5px" />
          <path d="M300,5.5 Q175 55 200,150"
                fill="none"
                stroke="#be2826"
                strokeWidth="5px" />
          <path d='M200, 150 Q195, 130   175,120'
                strokeWidth='3px'
                fill='none'
                stroke='#be2826'/>
          <path d='M200, 150 Q195, 130   174,123'
                strokeWidth='3px'
                fill='none'
                stroke='#be2826'/>
          <path d='M200, 150 Q195, 130   225,120'
                strokeWidth='3px'
                fill='none'
                stroke='#be2826'/>
          <path d='M200, 150 Q195, 130   224,117'
                strokeWidth='3px'
                fill='none'
                stroke='#be2826'/>
        </svg>
      </div>
    );
  }
}

export default DispatchActions;
