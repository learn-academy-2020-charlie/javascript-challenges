import React, {Component} from 'react';
import './App.css';
// import `./dice`

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        currentRoll : "",
        rollLog : [],
        dice : [1 , 2 , 3, 4, 5, 6]
      }
  }
  handleChange = () => {
    let {currentRoll, dice} = this.state
    let nextRoll = dice[Math.floor(Math.random() * this.state.dice.length)]
  }
  render() {
    return(
      <>
      <h1>Dice</h1>
      </>
    )
}

}
export default App
