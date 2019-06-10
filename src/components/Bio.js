import React, { Component } from 'react';
import $ from 'jquery'

class Bio extends Component {

  changeHeader = () => {
    $('.navtitle').text("About Me")
    $('.biolink').css({
      'background': 'black',
      'color': 'white',
      'padding': '0 3px'
    })
    $('.home, .researchlink, .contactlink, .gallerylink').css({
      'background': 'white',
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
