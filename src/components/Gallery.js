import React, { Component } from 'react';
import $ from 'jquery'

class Gallery extends Component {

  changeHeader = () => {
    $('.navtitle').text("Photos")
    $('.gallerylink').css({
      'background': 'black',
      'color': '#8ac8e2',
      'padding': '0 5px'
    })
    $('.homelink, .researchlink, .contactlink, .biolink').css({
      'background': 'none',
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
