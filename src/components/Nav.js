import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <div className="mobile-navlinks">
          <Link to="/bio" onClick={() => this.props.scrollTop()}><div className="biolink">Bio</div></Link>
          <Link to="/research" onClick={() => this.props.scrollTop()}><div className="research">Research</div></Link>
          <Link to="/contact" onClick={() => this.props.scrollTop()}><div className="contact">Contact</div></Link>
          <Link to="/" onClick={() => this.props.scrollTop()}><div className="home">Home</div></Link>
        </div>
      </div>
    );
  }

}
