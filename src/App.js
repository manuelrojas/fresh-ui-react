import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import UserForm from './components/UserForm'
import CalendarView from './components/CalendarView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Calendar UI</h2>
        </div>
        <div className="App-intro"> 
          <UserForm />
          <CalendarView country='US'/>
        </div>
      </div>
    );
  }
}

export default App;
