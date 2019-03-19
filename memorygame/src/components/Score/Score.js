import React, { Component } from 'react';

class Score extends Component {

    render() {
        return (
            <div className="nav-item">Current Score: {this.props.currentScore} | Highest Score: {this.props.highestScore}</div>
        )
    }
}

export default Score;
