import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import $ from 'jquery'

import './App.css';

import Home from './containers/Home'
import Header from './containers/Header'
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

  changeHeader = () => {
    $('.home').css({
      'background': 'black',
      'color': 'white',
      'padding': '0 3px'
    })
  }


  scrollTop = () => {
    $(".top").click(function(event){
      $(window).scrollTop(0);
    });

    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop > 180) {
        $('.top').animate({
          opacity: '1',
        }, 1000)
      };
    });
  }

  componentDidMount(){
    {this.changeHeader()}
    {this.scrollTop()}
  }



  render() {
    return (
      <BrowserRouter>
        <div className="app">

          <Route exact path="/" component={Home} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/research" component={Research} />
          <Route exact path="/gallery" component={Gallery} />
          <div className="home">
            <Header />

            <button className="top">
              Up
            </button>

          </div>

        </div>
      </BrowserRouter>
    );
  }


}

export default App;
