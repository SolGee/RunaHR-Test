import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import Home from './views/HomeView';
import Favorite from './views/FavoritesView';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={Favorite} />
      </Router>
    );
  }
}

export default App;
