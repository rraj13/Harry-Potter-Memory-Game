import React, { Component } from 'react';
import BodyWrapper from './components/BodyWrapper/BodyWrapper';
import CharacterWrapper from './components/CharacterWrapper/CharacterWrapper';
import Navbar from './components/Navbar/Navbar.js';
import Jumbotron from './components/Jumbotron/Jumbotron.js'
import CharacterCard from './components/CharacterCard/CharacterCard.js';
import characters from './characters.json';

class App extends Component {

  state = {
    characters: characters,
    currentScore: 0,
    highestScore: 0,
    status: "Click to begin!"
  }

  increaseScore = () => {
    this.setState({
      currentScore: this.state.currentScore + 1,
      status: "Awesome! Adding a point!"
    });

    setTimeout(() => {
      this.setState({
        status: "Click another image!"
      })
    }, 800)
  }

  updateHighestScore = () => {
    if (this.state.highestScore < this.state.currentScore) {
      this.setState({
        highestScore: this.state.currentScore
      })
    }
  }

  restartGame = () => {
    this.setState({
      currentScore: 0,
      status: "Sorry! Game over! Click to play again!"
    })
  }

  shuffleArray = (arr) => {

    let shuffledArray = []

    for (let i = 0; i < arr.length; i++) {
      let shuffleIndex = Math.round(Math.random() * arr.length);

      if (shuffledArray[shuffleIndex]) {
          shuffledArray.push(arr[i])
      } else {
          shuffledArray[shuffleIndex] = arr[i]
      }
    }

    shuffledArray = shuffledArray.filter(el => el != null)

    this.setState({
      characters: shuffledArray
    })
  }

  render () {
    return (
      <div>

        <Navbar status={this.state.status} currentScore={this.state.currentScore} highestScore={this.state.highestScore} />
        <Jumbotron />
        <BodyWrapper> 
          <CharacterWrapper>
            {this.state.characters.map(character => (
              <CharacterCard 
              id={character.id}
              key={character.id}
              name={character.name} 
              image={character.image}
              increaseScore={this.increaseScore}
              updateHighestScore={this.updateHighestScore}
              restartGame={this.restartGame}
              shuffleArray={this.shuffleArray}
              />
            ))}
            </CharacterWrapper>
        </BodyWrapper>
        
      </div>
    );
  }
}


export default App;
