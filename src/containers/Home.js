import React, { Component } from 'react';
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header'


export default class Home extends Component {

changeHeader = () => {
  $('.navtitle').text("Elyse Jennings")
  $('.homelink').css({
    'background': 'black',
    'color': 'white',
    'padding': '0 3px'
  })
  $('.researchlink, .biolink, .contactlink, .gallerylink').css({
    'background': 'white',
    'color': 'black',
    'padding': '0'
  })
}


scrollTop = () => {
  $(".top").click(function(event){
    $(window).scrollTop(0);
  });

  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop()
    if (scrollTop > 80) {
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

      <button className="top">
        Up
      </button>

    </div>
  );
};


}
