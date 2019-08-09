import React, { Component } from 'react';
import $ from 'jquery'

export default class Footer extends Component {

//cool scroll effect for the images
  // parallaxBackground = () => {
  //   $(window).scroll(function(){
  //     $(".footer-img").css("background-position", "50% "  + (($(window).scrollTop() / 20)) + "%");
  //   });
  // }

  emily = () => {
    var scrollTop = $(window).scrollTop()
    if (scrollTop > 10) {
      $('.emily').animate({
        'opacity': '1'
      }, 2000)
    };
  }

  componentDidMount = () => {
    {this.emily()}
  }


render() {
  return (
    <div className="footer-img">
      <div className="quote-box">
        <div className="quote"></div>
        <div className="author"></div>
      </div>
      <div className="emily"><a href="https://www.this-is-emily.com">Designed and Created by Emily</a></div>
    </div>

  );
};


}
