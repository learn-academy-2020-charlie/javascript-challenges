import React, { Component } from 'react';

class Dice extends Component{
 render(){
    return(
      <>
        <button id="button" onClick = { this.props.handleChange }>{ this.props.currentRoll }</button>
      </>
    )
  }

  }





export default Dice
