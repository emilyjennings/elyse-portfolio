import React, { Component } from 'react';
import $ from 'jquery'

import Nav from '../components/Nav'


export default class Header extends Component {


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

  scrollShift = () => {
    $(window).scroll(function(){
      $(".navbar, hr").css("opacity", 1 - $(window).scrollTop() / 150);
      if ($(window).scrollTop() > 400) {
        $(".navbar, hr").css("display", "none");
      } else if ($(window).scrollTop() < 400) {
        $(".navbar, hr").css("display", "block");      }
    });
  }


  componentDidMount(){
    {this.hamMenu()}
    {this.scrollShift()}
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
