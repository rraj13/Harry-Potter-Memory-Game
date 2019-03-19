import React from 'react';
import Score from '../Score/Score';
import Status from '../Status/Status';
import './navbar.css';


function Navbar (props) {
    return (
        <nav>
            <div className="nav-item">Harry Potter Memory Game</div>
            <Status {...props} />
            <Score {...props}/>
        </nav>

    )   
}



export default Navbar;