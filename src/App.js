import React, { Component } from 'react';
import './Assets/css/default.min.css';
import Header from './Components/headerComponents/Header.js';
import MainForm from './Components/formsComponents/MainForm.js';


class App extends Component {
  render() {
    return (
      <div className="container text-center">
       <Header/>
       <MainForm/>
      </div>
    );
  }
}

export default App;
