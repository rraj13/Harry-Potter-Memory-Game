import React from 'react';
import './character-wrapper.css';

function CharacterWrapper(props) {
    return <div className='CharacterWrapper'>{props.children}</div>;
    
}

export default CharacterWrapper;