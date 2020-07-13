import React, {Component} from 'react';
import './App.css';
import Dice from './Components/Dice.js';
import Log from  './Components/Log.js';

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        currentRoll : "Click to Roll",
        rollLog : [],
        dice : [1 , 2 , 3, 4, 5, 6]
      }
    }
  handleChange = () => {
    let newRoll = Math.floor(1 + (Math.random() * 6))
    this.setState({ currentRoll : newRoll })
    if (this.state.currentRoll !== "Click to Roll"){
    this.state.rollLog.push (this.state.currentRoll)
    }
  }
  render() {
    return(
      <>
      <body>
      <h1>Dice</h1>
      <Dice
      currentRoll={ this.state.currentRoll }
      dice={ this.state.dice }
      handleChange={ this.handleChange }
      />
      <h2>These are your past rolls:</h2>
      {this.state.rollLog.map(value => <Log currentRoll = {value} />)}
      </body>
      </>
    )
}

}
export default App
