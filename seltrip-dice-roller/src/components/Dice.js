import React, {Component} from 'react';


class Dice extends Component {
  constructor (props){
    super (props)
    }
    render(){
      return (
        <div>
          <h1>Click box to roll!</h1>
          <button onClick={this.props.newRoll}>{this.props.currentRoll}</button>
        </div>
      )
    }
}


export default Dice;
// As a user, I can see an application called Dice Roller
// As a developer, I can create a React application with App.js as my stateful component
// As a developer, I can create two child components that will accept props from App.js
// As a user, I can click a box and see the outcome of my current "roll"
// As a developer, I can pass a method from App.js to my dice component to display a number between 1 and 6
// As a user, I can see my roll logged
// As a developer, I can pass the value of the roll to a log component
// As a user, I can see the roll log continue to grow as I roll the dice
