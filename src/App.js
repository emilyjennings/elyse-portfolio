import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import $ from 'jquery'

import './App.css';

import Home from './containers/Home'
import Header from './containers/Header'
import Contact from './components/Contact'
import Research from './components/Research'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronUp, faTimes)

class App extends Component {

  changeHeader = () => {
    $('.home').css({
      'background': 'black',
      'color': 'white',
      'padding': '0 3px'
    })
  }

  componentDidMount(){
    {this.changeHeader()}
  }


  render() {
    return (
      <BrowserRouter>
        <div className="app">
         <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/research" component={Research} />

        </div>
      </BrowserRouter>

    );
  }


}

export default App;
