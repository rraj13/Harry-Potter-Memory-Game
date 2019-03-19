import React, { Component } from 'react';
import characters from '../../characters.json';

import "./character-card.css";


class CharacterCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
        this.handleClickEvent = this.handleClickEvent.bind(this) 

    }

    handleClickEvent = () => {
        if (!this.state.clicked) {
            this.setState({
              clicked: true
            });
            this.props.increaseScore();
            this.props.updateHighestScore();
            this.props.shuffleArray(characters);
        } else {
            this.setState({
                clicked: false
            });
            this.props.updateHighestScore();
            this.props.restartGame();
        }
    }

   

    render() {
        return (
            <div>
                <img className='avatar' src={this.props.image} alt={`${this.props.name} avatar`} onClick={this.handleClickEvent} />
            </div>
        )
    }
}

export default CharacterCard;



