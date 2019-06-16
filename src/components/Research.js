import React, { Component } from 'react';
import $ from 'jquery'

class Research extends Component {

  changeHeader = () => {
    $('.navtitle').text("Research")
    $('.researchlink').css({
      'background': 'black',
      'color': 'white',
      'padding': '0 3px'
    })
    $('.homelink, .biolink, .contactlink, .gallerylink').css({
      'background': 'white',
      'color': 'black',
      'padding': '0'
    })

  }

  render() {
    return (
      <div className="researchpage">
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default Research
