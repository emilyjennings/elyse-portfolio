import React, { Component } from 'react';
import $ from 'jquery'

class Research extends Component {

  changeHeader = () => {
    $('.navtitle').text("Research")
    $('.researchlink').css({
      'background': 'black',
      'color': '#8ac8e2',
      'padding': '0 5px'
    })
    $('.homelink, .biolink, .contactlink, .gallerylink').css({
      'background': 'none',
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
