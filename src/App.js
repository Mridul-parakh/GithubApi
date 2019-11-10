import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Dashboard from './container/Dashboard/Dashboard';
import Repository from './container/Repository/Repository';
import History from './container/History/History';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> 
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/repo' component={Repository}/>
        <Route exact path='/history' component={History}/>
      </div>
      </Router>
      
    )
  }
}

export default App;
