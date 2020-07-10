import React, { Component } from 'react';
import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;

