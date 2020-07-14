import React, {Component} from 'react';
import Dice from './components/Dice';
import Rolls from './components/Rolls';
import './App.css';

class App extends Component {
  constructor (props){
    super (props)
    this.state = {
      //currentRoll: "",
      rollOptions: ["1", "2", "3", "4", "5", "6"],
      previousRolls: []
    }
  }
  //method for new roll <Dice />
    newRoll = () => {
    let newDie = this.state.rollOptions[Math.floor(Math.random()*6)]
    console.log("new die", newDie);
      let prevNumArr = this.state.previousRolls.push(newDie)
        //this.setState({currentRoll: newDie})
        //console.log("this is current roll", this.state.currentRoll);
  //method for updating previous rolls array
        this.setState({previousRolls: prevNumArr})
        console.log("this is our previous roll", this.state.previousRolls);
      }
  render () {
    return (
      <>
      <Dice newRoll={this.newRoll} currentRoll={this.state.previousRolls[this.state.previousRolls.length-1]}/>
      <Rolls />
      </>
    )
  }
}

export default App;
