import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './city-of-london_gal.jpg';

//Import containers
import Home from './containers/home'
import Home2 from './containers/home2'
import Analysis from './containers/analysis'
import Comparison from './containers/comparison'

class App extends Component {

  render() {
    return (
      <Router>
       <div>
         <Route exact path="/" component={Home}/>
         <Route path="/compare" component={Home2}/>
         <Route path="/analysis" component={Analysis}/>
         <Route path="/comparison" component={Comparison}/>
       </div>
      </Router>
    )
  }
}

export default App;

//  <Route path="/">
//   <Header></Header>
//   <Route />
//  </Route>
