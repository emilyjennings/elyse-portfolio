import React, { Component } from 'react';
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {

//cool scroll effect for the images
  // parallaxBackground = () => {
  //   $(window).scroll(function(){
  //     $(".footer-img").css("background-position", "50% "  + (($(window).scrollTop() / 20)) + "%");
  //   });
  // }

  // emily = () => {
  //   var scrollTop = $(window).scrollTop()
  //   if (scrollTop > 10) {
  //     $('.emily').animate({
  //       'opacity': '1'
  //     }, 2000)
  //   };
  // }

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


componentDidMount = () => {
  {this.scrollTop()}
}


render() {
  return (
    <div className="footer-img">
      <div className="emily"><a href="https://www.this-is-emily.com">Designed and Created by Emily</a></div>
      <button className="top">
        <FontAwesomeIcon icon={['fas', 'chevron-up']} />
      </button>
    </div>

  );
};


}
