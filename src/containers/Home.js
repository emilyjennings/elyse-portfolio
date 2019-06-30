import React, { Component } from 'react';
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header'
import Footer from './Footer'


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

changeFooter = () => {
  $('.quote').text('"In theory there is no difference between theory and practice. In practice there is."')
  $('.author').text('-Yogi Berra')
  $('.footer-img').css(
    'background-image', 'url("../src/components/img/attachments/Nepal 2009 638.JPG")'
  )
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

//cool scroll effect for the images
  parallaxBackground = () => {
    $(window).scroll(function(){
      $(".profile-img").css("background-position", "0% "  + (($(window).scrollTop() / 20) + 10) + "%");
      // $("#abroad, #college, #teaching, .story, #coding").css("background-position", "50% "  + (($(window).scrollTop() / 20)) + "%");
      // $("#jeju").css("background-position", "0% "  + (($(window).scrollTop() / 60)) + "%");
      // $("#between, #dc").css("background-position", "50% "  + (($(window).scrollTop() / 60)) + "%");
    });
  }

componentDidMount(){
  {this.changeHeader()}
  {this.scrollTop()}
  {this.changeFooter()}
}

render() {
  return (
    <div className="">
      <div className="profile-img"></div>
      <div className="bio_content">
        Elyse is a family demographer, trained in sociology, whose research focuses on understanding the causes and consequences of family events.
        She earned her Ph.D. in Sociology at the University of Michigan in 2013, where she was a predoctoral trainee at the <a href="https://www.psc.isr.umich.edu/">Population Studies Center</a>. She then completed a postdoctoral fellowship at the <a href="https://www.cpc.unc.edu/">Carolina Population Center</a> at the University of North Carolina.
        She is currently a Research Scientist at the <a href="https://www.hsph.harvard.edu/population-development/">Harvard Center for Population and Development Studies</a> at the T.H. Chan School of Public Health.
      </div>

      <Footer />

    </div>
  );
};


}
