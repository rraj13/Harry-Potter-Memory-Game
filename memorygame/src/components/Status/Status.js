import React, { Component } from 'react';

class Status extends Component {

    render() {
        return (
            <div className="nav-item">{this.props.status}</div>
        )
    }
}

export default Status;
