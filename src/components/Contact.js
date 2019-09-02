import React, { Component } from 'react';
import $ from 'jquery'

import Footer from '../containers/Footer'

import village from './img/attachments/village.JPG'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }


// changes the header subtitle
  changeHeader = () => {
    $('.navtitle').text("Contact Me")
    $('.contactlink').css({
      'background': '#008274',
      'color': '#f7f7f0',
      'padding': '0 5px'
    })
    $('.homelink, .researchlink, .biolink, .gallerylink').css({
      'background': 'none',
      'color': '#008274',
      'padding': '0 5px'
    })
    $('.footer-img').css(
      'background-image', 'linear-gradient(rgba(28, 95, 94, 0.4), rgba(28, 95, 94, 0.4)), url(' + village + ')'
    )

  }

  changeFooter = () => {
    $('.quote').text('"Research is formalized curiosity. It is poking and prying with a purpose."')
    $('.author').text('-Zora Neale Hurston')
  }

  parallaxFooter = () => {
    $(window).scroll(function(){
      $(".footer-img").css("background-position", "0% "  + (($(window).scrollTop() / 13)) + "%");
    });
  }


  componentDidMount(){
    {this.changeHeader()}
    {this.changeFooter()}
    {this.parallaxFooter()}
  }

  // Code for the contact form submission given by Netlify documentation
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

// contact form as per code given by netlify's form docs
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contactpage">
        <div className="contactcontainer">
          <div className="formcaption">I'll be in touch soon.</div>
          <form name="contact" onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
            <div className="input-row-1">
                <label>
                  Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                  Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                </label>

            </div>
            <div className="input-row-2">

                <label>
                  Message: <textarea name="message" maxlength="140" value={message} onChange={this.handleChange} />
                </label>

            </div>

              <button id="submit" type="submit">Send</button>

          </form>
        </div>

        <div className="space"></div>

        <Footer />


      </div>
    );
  };


}
