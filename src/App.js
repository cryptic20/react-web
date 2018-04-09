import React, { Component } from 'react';
import './Assets/css/default.min.css';
import Header from './Components/headerComponents/Header.js';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
      </div>
    );
  }
}

export default App;
