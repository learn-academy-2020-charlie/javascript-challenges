import React, { Component } from 'react'
// import Header from './Header'
// import Recipes from './Recipes'
// import Footer from './Footer'
// import logo from './logo.svg';
// import './App.css';

//
// class App extends Component {
//   render () {
//     return (
//       <div className = "App">
//         <Header />
//         <Recipes />
//         <Footer />
//       </div>
//     )
//   }
// }


class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      currentPosition: ""
      bodyPlacementOptions: ["R.hand","L.hand", "R.foot", "fL.oot"]
      colorOptions: ["red", "blue", "green", "purple"]
    }
  }

  handleChange = () =>
  let  {bodyPlacementOptions, colorOptions} = this.state
  //above is destructured
  let bodyPosition = bodyPlacementOptions[Math.floor(Math.random()*4)]
  let colorPosition = colorOptions[Math.floor(Math.Random()*3)]
  //pseudocode: Create 2 random.Numbers to pick a body part and a color.
  //return both of those values as a string
  let newPosition = `${bodyPosition} ${colorPosition}`
  console.log(newPosition);
  //update the state "currentPosition" based on the return
  //go to state object and reassign current postion to new position
  this.setState({currentPosition: newPosition})
  //what comes after your constructor? A: render
}

  render (){
    return (
      <> //or <React.Fragment>
        <h1>Twister!</h1>
        <button onClick={this.handleChange}>
        CLick me!
        </button>
          <div>
          {this.state.currentPosition}
          </div>
      </>
    )
  }
}


export default App

// With the component defined, we can then call it in the App component.
//This requires two steps:
  // Importing the component
  // Calling the component in the return
