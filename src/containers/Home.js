import React, { Component } from 'react';
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header'


export default class Home extends Component {

changeHeader = () => {
  $('.navtitle').text("Elyse Jennings")
  $('.homelink').css({
    'background': '#008274',
    'color': '#f7f7f0',
    'padding': '0 5px'
  })
  $('.researchlink, .biolink, .contactlink, .gallerylink').css({
    'background': 'none',
    'color': '#008274',
    'padding': '0 5px'
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
    <div className="">
      <div className="profile-img"></div>
      <div className="bio_content">
        Elyse is a family demographer, trained in sociology, whose research focuses on understanding the causes and consequences of family events.
      </div>
      <div className="bio_content">
        She earned her Ph.D. in Sociology at the University of Michigan in 2013, where she was a predoctoral trainee at the Population Studies Center. She then completed a postdoctoral fellowship at the Carolina Population Center at the University of North Carolina.
      </div>
      <div className="bio_content">
        She is currently a Research Scientist at the Harvard Center for Population and Development Studies at the T.H. Chan School of Public Health.
      </div>
      <div className="nepal-img">
        <div className="quote-box">
          <div className="nepal-quote">"The primary challenge facing our species is the reproduction of our species itself." </div>
          <div className="boris">-Boris Johnson</div>
        </div>
      </div>

      <button className="top">
        Up
      </button>

    </div>
  );
};


}
