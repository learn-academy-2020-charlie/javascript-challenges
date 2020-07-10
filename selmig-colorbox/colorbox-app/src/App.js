import React, {Component} from 'react';
import Button from './Button'
import './App.css';
// User Stories:
// As a user, I can see a white square on the screen
// As a user, when I click on the square the name of a color appears in the box
// As a user, each time I click the box I see a new color name
// As a user, I can cycle through a list of color names, one per click - green, blue, yellow, red, purple, orange
// As a user, when I click the box, the background changes to match the name of the color name displayed in the box
// As a user, I can see many color boxes on the page all acting independently of one another
//use state to adjust dynamic styling in an inline style.

class App extends Component {
  constructor (props) {
    super (props)

  }
  render () {
    return (
      <>
      <h1>Color Box!</h1>
      {/* Instead of "CLick me!" make the current color the name of the button and set it to state.currentColor 
        <div>
        {this.state.currentColor}
        </div>*/}

      <Button />
      <Button />
      <Button />

       
      </>
    )
  }
}

export default App
