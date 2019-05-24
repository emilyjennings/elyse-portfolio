import React, { Component } from 'react';
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../components/Header'


export default class Home extends Component {

  changeHeader = () => {
    $('.navtitle').text("Elyse")
    $('.navsubtitle, a#e, a#a, a#g').hide()
    $('.navsubtitlestick').text("This is me")
    $('.navlinks').show()
  }

  backgroundChange = () => {
    $("body").css({


    });
  }

  scrollFadeText = () => {
    $(window).scroll(function(){
      if ($(window).scrollTop() > 200) {
        $('#okay').animate({
          opacity: 1,
        }, 1000, function(){
          $('#me').animate({
            opacity: 1,
          }, 2000)
        })
      }
    });
  }

//Not in use - for the bottons fading in
  fadeButtons = () => {
    setInterval(function(){
      $('a#a').fadeIn(0, function(){
        $('a#g').fadeIn(0, function(){
          $('a#e').fadeIn(0, function(){
          });
        });
      });
    });
  }

  scrolldown = () => {
    $('.scrolldown').animate({
      bottom: '60px',
    }, 500, function(){
      $('.scrolldown').animate({
        bottom: '40px',
      }, 500, function(){
        $('.scrolldown').animate({
          bottom: '60px',
        }, 500, function(){
          $('.scrolldown').animate({
            bottom: '40px',
          }, 500, function(){
            $('.scrolldown').animate({
              bottom: '60px',
            }, 500, function(){
              $('.scrolldown').animate({
                bottom: '40px',
              }, 500, function(){
                $('.scrolldown').animate({
                  bottom: '60px',
                }, 500, function(){
                  $('.scrolldown').animate({
                    bottom: '40px',
                  }, 500)
                })
              })
            })
          })
        })
      })
    })
    $(window).scroll(function(){
      $(".scrolldown").css("opacity", (1 / $(window).scrollTop() - 1))
    });

  }

  componentDidMount(){
    {this.changeHeader()}
    {this.scrollFadeText()}
    {this.fadeButtons()}
    {this.backgroundChange()}
    {this.scrolldown()}
  }

  render() {
    return (
      <div className="home">
        <Header />
      </div>
    );
  };


}
