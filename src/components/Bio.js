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
        <div className="bio_content">
          In 2009, she lived in Nepal for an extended period studying the effects of marriage on women.
        </div>
        <div className="bio_content">
          bla bla bla
        </div>
        <div className="nepal-img"></div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default Bio
