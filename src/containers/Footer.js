import React, { Component } from 'react';
import $ from 'jquery'

export default class Footer extends Component {

//cool scroll effect for the images
  parallaxBackground = () => {
    $(window).scroll(function(){
      $(".footer-img").css("background-position", "50% "  + (($(window).scrollTop() / 20)) + "%");
    });
  }

render() {
  return (
    <div className="footer-img">
      <div className="quote-box">
        <div className="quote"></div>
        <div className="author"></div>
      </div>
    </div>

  );
};


}
