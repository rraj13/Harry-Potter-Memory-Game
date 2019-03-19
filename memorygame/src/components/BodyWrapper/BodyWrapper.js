import React from 'react';
import './body-wrapper.css';

function BodyWrapper(props) {
    return <div className='BodyWrapper'>{props.children}</div>;
  }
  
export default BodyWrapper;
  


