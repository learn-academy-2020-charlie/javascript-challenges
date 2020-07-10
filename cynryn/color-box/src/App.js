import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        currentColor: "",
        colorOptions: ["green", "blue", "yellow", "red", "purple", "orange"]
      }
  }
  handleChange = () => {
    let { colorOptions } = this.state;
    let newColor = colorOptions[Math.floor(Math.random() * 6)]
    let newColorString = `${ newColor }`
    return this.setState({ currentColor: newColorString })
  }

  render(){ 
    return(
      <>
      <h1><u>The Ultimate Color Selector!</u></h1>
      <button onClick = { this.handleChange }>
        CHOOSE YOUR COLOR
      </button>
      <div>
        { this.state.currentColor }
      </div>
      </>
    )
    }
}

export default App;