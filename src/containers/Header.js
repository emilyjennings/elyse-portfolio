import React, { Component } from 'react';
import $ from 'jquery'

import Nav from '../components/Nav'


export default class Header extends Component {

  hamMenu = () => {
    //hides the hamburger menu at first until clicked
    $(".mobile-navlinks").hide();
    $(".hamburger").click(function(){
      $(".mobile-navlinks").slideToggle("slow", function(){
        $(".hamburger").fadeOut();
        $(".mobile-navlinks").show();
        $(".cross").show();
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

        </div>
    );
  }

}
