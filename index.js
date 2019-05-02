import React, { Component } from 'react';
import { render } from 'react-dom';
import Char from './Char';
import randomWords from 'random-english-words';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = this.playGame();
    }

    
  playGame = () =>{  
    
    return(
    {
      name: 'React',
      length: 0,
      randomWord: randomWords(), 
      inputLetter: "", 
      guessedLetters: [],   
      guesses: "8",
    });
  }
  
  inputHandler=(evt)=>{
    let guess = evt.target.value
    if(guess !== "" && !this.state.randomWord.includes(guess)){
      this.setState({guesses: this.state.guesses -1})
    }
    this.setState({ 
      guessedLetters: [...this.state.guessedLetters, evt.target.value],
      });
     
  }


 showDisplayWord = () => {
    let displayWord = [];
  for(let i=0; i<this.state.randomWord.length; i++) {
   if(
     this.state.guessedLetters.includes(this.state.randomWord[i])){
          displayWord.push(this.state.randomWord[i]);
          }
   else {
         displayWord.push(" "); 
               }
      }   
   return displayWord;
  }

   

  showWinner = () => {
    if(this.showDisplayWord().join("") === this.state.randomWord) {
      return <div>
      <h4>You have won!</h4>
      <button onClick={this.playAgain}>Play again!</button></div>
    } 
    if(this.state.guesses <= 0) {
      return <div><h5>Sorry you have run out of guesses! The word is</h5> <h4>{this.state.randomWord} </h4>
      <button onClick={this.playAgain}>Play again!</button>
      </div>
    }

  }

  playAgain = () => {
    this.setState({...this.playGame() })
  }

  render() {
     let charcs = this.showDisplayWord().map((character, index) => {
      return (<Char character={character} key={index}

       />)});
   
    return (
      <div>
        <p>{this.state.randomWord}</p>
        <p>{this.showWinner()}</p>
        <p>
          <input type="text" onChange={this.inputHandler} value={this.state.inputLetter} /></p>
          
          
          {charcs} 
         <p>Your guessed letters so far: {this.state.guessedLetters}</p>
        <p>The number of guesses you still have : {this.state.guesses}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
