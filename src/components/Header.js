import React, { Component } from 'react';
import $ from 'jquery'

import Nav from './Nav.js'


export default class Header extends Component {


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
    {this.hamMenu()}
  }

  render() {
    return (
        <div className="headercontainer">
          <Nav />

          <div className="navbar">
            <div className="navtitle">Elyse Jennings</div>
          </div>

        </div>
    );
  }

}
