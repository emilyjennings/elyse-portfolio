import React, { Component } from 'react';
import $ from 'jquery'

class Gallery extends Component {

  changeHeader = () => {
    $('.navtitle').text("Photos")
    $('.gallerylink').css({
      'background': 'black',
      'color': 'white',
      'padding': '0 3px'
    })
    $('.homelink, .researchlink, .contactlink, biolink').css({
      'background': 'white',
      'color': 'black',
      'padding': '0'
    })

  }

  render() {
    return (
      <div className="gallerypage">
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default Gallery
