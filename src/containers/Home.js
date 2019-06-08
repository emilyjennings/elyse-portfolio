import React, { Component } from 'react';
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header'


export default class Home extends Component {

changeHeader = () => {
  $('.navtitle').text("Elyse Jennings")
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
    <div className="home">
      <Header />
      <div className="navtitle">Elyse Jennings</div>

      <button className="top">
        Up
      </button>

    </div>
  );
};


}
