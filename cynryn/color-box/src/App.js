import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        //randomize currentColor so that it can work independently on different buttons
        currentColor1: "",
        currentColor2: "",
        currentColor3: "",
        currentColor4: "",
        currentColor5: "",
        currentColor6: "",

        colorOptions: ["green", "blue", "yellow", "red", "purple", "orange"]
      }
  }

  handleChange1 = () => {
    let { colorOptions } = this.state;
    let newColor = colorOptions[Math.floor(Math.random() * 6)]
    let newColorString = `${ newColor }`
    return this.setState({ currentColor1: newColorString })
  }

  handleChange2 = () => {
    let { colorOptions } = this.state;
    let newColor = colorOptions[Math.floor(Math.random() * 6)]
    let newColorString = `${ newColor }`
    return this.setState({ currentColor2: newColorString })
  }

  handleChange3 = () => {
    let { colorOptions } = this.state;
    let newColor = colorOptions[Math.floor(Math.random() * 6)]
    let newColorString = `${ newColor }`
    return this.setState({ currentColor3: newColorString })
  }

  handleChange4 = () => {
    let { colorOptions } = this.state;
    let newColor = colorOptions[Math.floor(Math.random() * 6)]
    let newColorString = `${ newColor }`
    return this.setState({ currentColor4: newColorString })
  }

  handleChange5 = () => {
    let { colorOptions } = this.state;
    let newColor = colorOptions[Math.floor(Math.random() * 6)]
    let newColorString = `${ newColor }`
    return this.setState({ currentColor5: newColorString })
  }

  handleChange6 = () => {
    let { colorOptions } = this.state;
    let newColor = colorOptions[Math.floor(Math.random() * 6)]
    let newColorString = `${ newColor }`
    return this.setState({ currentColor6: newColorString })
  }


  render(){ 
    return(
      <>
      <h1><u>The Ultimate Color Selector!</u></h1>


      <button id = "testbutton" onClick = { this.handleChange1 }>
      <div>
        { this.state.currentColor1 }
      </div>
      </button>

      <button id = "testbutton" onClick = { this.handleChange2 }>
      <div>
      { this.state.currentColor2 }
      </div>
      </button>

      <button id = "testbutton" onClick = { this.handleChange3 }>
      <div>
      { this.state.currentColor3 }
      </div>
      </button>

      <button id = "testbutton" onClick = { this.handleChange4 }>
      <div>
      { this.state.currentColor4 }
      </div>
      </button>

      <button id = "testbutton" onClick = { this.handleChange5 }>
      <div>
      { this.state.currentColor5 }
      </div>
      </button>

      <button id = "testbutton" onClick = { this.handleChange6 }>
      <div>
      { this.state.currentColor6 }
      </div>
      </button>


      {/* <div>
        { this.state.currentColor }
      </div> */}
      </>
    )
    }
}

export default App;