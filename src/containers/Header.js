import React, { Component } from 'react';
import $ from 'jquery'

import Nav from '../components/Nav'


export default class Header extends Component {


  componentDidMount(){

  }

  render() {
    return (
        <div className="headercontainer">
          <Nav />

        </div>
    );
  }

}
