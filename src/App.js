import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import Home from './containers/Home'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Research from './components/Research'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobeAsia, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin, faTimes)

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Home />

          <Route exact path="/" component={Home} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/research" component={Research} />
          <Route exact path="/gallery" component={Gallery} />

        </div>
      </BrowserRouter>
    );
  }


}

export default App;
