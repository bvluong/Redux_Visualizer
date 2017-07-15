import React from 'react';

class ArrowToProps extends React.Component{

  componentDidUpdate(){
    if (this.props.currentComponents[this.props.currentComponents.length-1] === 'arrow-to-props'){
      setTimeout( () => this.props.addCurrentComponent('search'), 3500);
    }
  }

  // <svg width="300" height="300" >
  //   <path d="M50 100 C 60 60, 50 40, 50 10" stroke="black" fill="none" strokeWidth='10'/>
  // </svg>
  // <svg width="300" height="300" >
  //   <path d="M10 60 C 20 80, 40 80, 70 100" stroke="black" fill="transparent"/>
  // </svg>

  render () {
    if (!this.props.currentComponents.includes('arrow-to-props')) {
      return (<div className='arrow-container'></div>);
    }
    return(
      <div className='arrow-container'>
        <svg id='right-top-arrow' className="foursec" width='300px'>
          <path d="M150,120 Q175 55 0,50"
                fill="none"
                stroke="#be2826"
                strokeWidth="5px" />
              <path d="M147,120 Q175 55 0,50"
                fill="none"
                stroke="#be2826"
                strokeWidth="5px" />
              <path d='M0, 50 Q0, 60   30,20'
                strokeWidth='3px'
                fill='none'
                stroke='#be2826'/>
              <path d='M0, 50 Q0, 60   28,18'
                strokeWidth='3px'
                fill='none'
                stroke='#be2826'/>
              <path d='M0, 50 Q10, 60   27,91'
                strokeWidth='3px'
                fill='none'
                stroke='#be2826'/>
              <path d='M0, 50 Q10, 60   30,90'
                strokeWidth='3px'
                fill='none'
                stroke='#be2826'/>
        </svg>
        <div className="mini-giphy twosecstay">
          <div className='thought-bkg'></div>
          <h2 className='action-head-2'>Map State To Props!</h2>
          <iframe src={this.props.searchResult.data[0].embed_url}/>
        </div>
        <svg className="bottom-right-arrow onesec" width='300px'>
          <path d="M100.5,125 Q200 80 150,25"
            fill="none"
            stroke="#be2826"
            strokeWidth="5px" />
          <path d="M99,123 Q200 80 150, 25"
            fill="none"
            stroke="#be2826"
            strokeWidth="5px" />
          <path d="M150,25 Q160,25 120,60"
            fill="none"
            stroke="#be2826"
            strokeWidth="3px" />
          <path d="M150,25 Q160,25 122,62"
              fill="none"
              stroke="#be2826"
              strokeWidth="3px" />
            <path d="M150,25 Q140,25 190,48"
              fill="none"
              stroke="#be2826"
              strokeWidth="3px" />
            <path d="M150,25 Q140,25 190,50"
                fill="none"
                stroke="#be2826"
                strokeWidth="3px" />
        </svg>
      </div>
    );

  }
}

export default ArrowToProps;
