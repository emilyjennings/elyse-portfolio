import React, { Component } from 'react';
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {

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
