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
    $('.homelink, .researchlink, .contactlink, .gallerylink').css({
      'background': 'none',
      'color': 'black',
      'padding': '0'
    })

  }

  render() {
    return (
      <div className="biopage">
        <div className="profile-img"></div>
        <div className="bio_content">
        Elyse Jennings is a Research Scientist at the Center for Population and Development Studies, Harvard T.H. Chan School of Public Health.
        </div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default Bio
