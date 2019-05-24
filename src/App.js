import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import Home from './containers/Home'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin)

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Home />

        </div>
      </BrowserRouter>
    );
  }


}

export default App;
