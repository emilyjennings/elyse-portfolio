import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavBar extends Component {

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

  render() {
    return (
      <div>
        <div className="navlinks">
          <Link to="/bio" onClick={() => this.scrollTop()}><div className="biolink">Bio</div></Link>
          <Link to="/research" onClick={() => this.scrollTop()}><div className="researchlink">Publications</div></Link>
          <Link to="/contact" onClick={() => this.scrollTop()}><div className="contactlink">Contact</div></Link>
          <a href="https://drive.google.com/file/d/0B9A5yruaTu0YQkRqTlJYbVJ2YTNJOE9vNXpTSTZDaVlfX3dj/view?usp=sharing"><div className="cv">CV</div></a>
          <Link to="/" onClick={() => this.scrollTop()}><div className="homelink">Home</div></Link>
        </div>

        <button className="hamburger">&#9776;</button>
        <div className="mobile-navlinks">
          <Link to="/bio" onClick={() => this.scrollTop()}><div className="biolink">Bio</div></Link>
          <Link to="/research" onClick={() => this.scrollTop()}><div className="researchlink">Publications</div></Link>
          <Link to="/contact" onClick={() => this.scrollTop()}><div className="contactlink">Contact</div></Link>
          <Link to="https://drive.google.com/file/d/0B9A5yruaTu0YQkRqTlJYbVJ2YTNJOE9vNXpTSTZDaVlfX3dj/view?usp=sharing"><div className="cv">CV</div></Link>
          <Link to="/" onClick={() => this.scrollTop()}><div className="homelink">Home</div></Link>
          <div className="cross"><Link to=""><FontAwesomeIcon icon={['fas', 'times']} /></Link></div>
        </div>
      </div>
    );
  }

}
