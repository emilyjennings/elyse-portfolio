import React, { Component } from 'react';
import $ from 'jquery'

class Bio extends Component {

  changeHeader = () => {
    $('.navtitle').text("About Me")
    $('.biolink').css({
      'background': 'black',
      'color': '#8ac8e2',
      'padding': '0 5px'
    })
    $('.home, .researchlink, .contactlink, .gallerylink').css({
      'background': 'none',
      'color': 'black',
      'padding': '0'
    })

  }

  render() {
    return (
      <div className="biopage">
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default Bio
