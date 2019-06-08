import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <div className="navlinks">
          <Link to="/bio" onClick={() => this.props.scrollTop()}><div className="biolink">Bio</div></Link>
          <Link to="/research" onClick={() => this.props.scrollTop()}><div className="research">Research</div></Link>
          <Link to="/contact" onClick={() => this.props.scrollTop()}><div className="contact">Contact</div></Link>
          <Link to="/" onClick={() => this.props.scrollTop()}><div className="home">Home</div></Link>
        </div>

        <button className="hamburger">&#9776;</button>
        <div className="mobile-navlinks">
          <Link to="/bio" onClick={() => this.props.scrollTop()}><div className="biolink">Bio</div></Link>
          <Link to="/research" onClick={() => this.props.scrollTop()}><div className="research">Research</div></Link>
          <Link to="/contact" onClick={() => this.props.scrollTop()}><div className="contact">Contact</div></Link>
          <Link to="/" onClick={() => this.props.scrollTop()}><div className="home">Home</div></Link>
          <div className="cross"><Link to=""><FontAwesomeIcon icon={['fas', 'times']} /></Link></div>
        </div>
      </div>
    );
  }

}
