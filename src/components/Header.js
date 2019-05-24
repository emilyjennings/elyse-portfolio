import React, { Component } from 'react';
import $ from 'jquery'


export default class Header extends Component {

  scrollFade = () => {
    $(window).scroll(function(){
      $(".navbar, hr").css("opacity", 1 - $(window).scrollTop() / 150);
      if ($(window).scrollTop() > 400) {
        $(".navbar, hr").css("display", "none");
      } else if ($(window).scrollTop() < 400) {
        $(".navbar, hr").css("display", "block");      }
    });
  }

  navStick = () => {
    $(window).scroll(function(){
      $(".navstick, .hamburger").css("opacity", 0 + $(window).scrollTop() / 250)
      $(".navstick").css("width", $(window).scrollTop() * 4)
    });
  }

  hamMenu = () => {
    //hides the hamburger menu at first until clicked
    $(".mobile-navlinks").hide();
    $(".hamburger").click(function(){
      $(".mobile-navlinks").slideToggle("slow", function(){
        $(".mobile-navlinks").show();
        $(".cross").show();
        $(".hamburger").fadeOut()
      });
    });

    //on click, the menu displays
    $(".cross").click(function(event){
      event.preventDefault();
      if ($(".cross").is(":visible")){
        $(".mobile-navlinks").slideToggle("slow", function(){
          $(".hamburger").fadeIn()
        });
      }
    });
  }

  componentDidMount(){
    {this.navStick()}
    {this.scrollFade()}
    {this.hamMenu()}
  }

  render() {
    return (
        <div className="headercontainer">

          <div className="navbar">
            <div className="navtitle">Elyse Jennings</div>
          </div>

        </div>
    );
  }

}
