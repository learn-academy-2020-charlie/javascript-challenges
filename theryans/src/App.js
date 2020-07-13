import React, {Component} from 'react';
import './App.css';
import Dice from './Components/Dice.js';

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        currentRoll : 0,
        rollLog : [],
        dice : [1 , 2 , 3, 4, 5, 6]
      }
    }
  handleChange = () => {
    let newRoll = Math.floor(Math.random() * 7)
    this.setState({ currentRoll : newRoll })
  }
  render() {
    return(
      <>
      <h1>Dice</h1>
      <Dice 
      currentRoll={ this.state.currentRoll }
      dice={ this.state.dice }
      handleChange={ this.handleChange }
      />
      </>
    )
}

}
export default App
