import React, { Component } from 'react';
import $ from 'jquery'

import Nav from '../components/Nav'


export default class Header extends Component {
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


  hamMenu = () => {
    //hides the hamburger menu at first until clicked
    $(".mobile-navlinks").hide();
    $(".hamburger").click(function(){
      $(window).scrollTop(0);
      $(".mobile-navlinks").slideToggle("slow", function(){
        $(".hamburger").fadeOut();
        $(".mobile-navlinks").show();
        $(".cross").show();
      });
    });

    //exes out of the menu
    $(".cross").click(function(event){
      event.preventDefault();
      if ($(".cross").is(":visible")){
        $(".mobile-navlinks").slideToggle("slow", function(){
          $(".hamburger").fadeIn()
        });
      }
      $(".cross").hide()
    });
  }


  componentDidMount(){
    {this.hamMenu()}
  }

  render() {
    return (
        <div className="headercontainer">
          <Nav />
          <div className="navtitle"></div>

        </div>
    );
  }

}
