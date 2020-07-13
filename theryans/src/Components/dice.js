import React, { Component } from 'react';

class Dice extends Component{
 render(){
    return(
      <>
        <button id="button" onClick = { this.props.handleChange }>Click To Roll</button>
        <p>{ this.props.currentRoll }</p>
      </>
    )
  }

  }





export default Dice
