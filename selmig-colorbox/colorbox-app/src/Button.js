import React, {Component} from 'react';


class Button extends Component {
  constructor (props) {
    super (props)
    this.state = {
      currentColor: "click to change color",
      colorOptions: ["green", "blue", "yellow", "red", "purple", "orange"]

    }
  }

  handleChange = () => {
    let { colorOptions, currentColor } = this.state
    let newColor = colorOptions[Math.floor(Math.random()*colorOptions.length)]
    this.setState({ currentColor: newColor })

  }

  render () {
    let { currentColor } = this.state
    
    return (
      <div onClick={this.handleChange} style =  {{width: 100, height: 100, border: '1px solid black',  backgroundColor: currentColor}}>
      { currentColor }
      </div>
  )

  } 
}

export default Button
