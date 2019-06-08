import React, { Component } from 'react';
import $ from 'jquery'

class Gallery extends Component {

  changeHeader = () => {
    $('.navtitle').text("Photos")
    $('.biolink').css({
      'background': 'black',
      'color': 'white',
      'padding': '0 3px'
    })
    $('.home, .research, .contact').css({
      'background': 'white',
      'color': 'black',
      'padding': '0'
    })

  }

  render() {
    return (
      <div className="projectshowborder">
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default Gallery
