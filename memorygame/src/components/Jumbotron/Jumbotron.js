import React, { Component } from 'react';
import './jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="instructions-div">
                    <p>Welcome to Harry Potter Memory Game!</p>
                    <p>Click an image to earn points!</p>
                    <p> But be careful, if you click one you already have before, you lose! Remember wisely :)</p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;