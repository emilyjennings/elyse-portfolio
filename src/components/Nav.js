import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <button className="hamburger">&#9776;</button>
        <div className="mobile-navlinks">
          <Link to="/bio" onClick={() => this.props.scrollTop()}>Bio</Link>
          <Link to="/research" onClick={() => this.props.scrollTop()}>Research</Link>
          <Link to="/contact" onClick={() => this.props.scrollTop()}>Contact</Link>
          <Link to="/" onClick={() => this.props.scrollTop()}>Home</Link>
          <Link to="" className="cross">x</Link>
        </div>
      </div>
    );
  }

}
