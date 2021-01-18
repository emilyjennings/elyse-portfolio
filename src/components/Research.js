import React, { Component } from 'react';
import $ from 'jquery'

import Fade from 'react-reveal/Fade';
import Footer from '../containers/Footer'


class Research extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: {
        7: {
          index: 7,
          link: "https://www.sciencedirect.com/science/article/pii/S2352827320303037",
          name: 'depressive',
          image: '',
          title: 'Jennings, Elyse A., Margaret Ralston, and Enid Schatz. Forthcoming. Support in Times of Need: How Depressive Symptoms Can Impact Receipt of Social Support among Aging Adults in South Africa. SSM – Population Health, 12.',
        },
        0: {
          index: 0,
          link: "https://www.cambridge.org/core/journals/ageing-and-society/article/receipt-of-emotional-support-among-rural-south-african-adults/44525B51C64F9C9586C1EE4DF2C42ADD",
          name: 'emotional',
          image: '',
          title: 'Jennings, Elyse A., Nolwazi Mkhwanazi, and Lisa F. Berkman. 2018. “Receipt of Emotional Support Among Rural South African Adults.” Ageing & Society.',
        },
        1: {
          index: 1,
          link: "https://www.tandfonline.com/doi/full/10.1080/00324728.2017.1282622",
          name: 'composition',
          image: '',
          title: 'Jennings, Elyse A. 2017. “Family Composition and Marital Dissolution in Rural Nepal, 1945–2008.” Population Studies, 71(2): 229-248.',
        },
        2: {
          index: 2,
          link: "https://link.springer.com/article/10.1007/s13524-016-0504-8",
          name: 'predictors',
          image: '',
          title: 'Jennings, Elyse A. 2016. “Predictors of Marital Dissolution during Rapid Social Change: Evidence from South Asia.” Demography, 53(5): 1351-1375.',
        },
        3: {
          index: 3,
          link: "https://www.tandfonline.com/doi/full/10.1080/00324728.2016.1140806",
          name: 'influence',
          image: '',
          title: 'Jennings, Elyse A. and Rachael S. Pierotti. 2016. “The Influence of Wives’ and Husbands’ Fertility Preferences on Progression to a Third Birth in Nepal, 1997–2009.” Population Studies, 70(1): 115-133.',
        },
        4: {
          index: 4,
          link: "https://onlinelibrary.wiley.com/doi/full/10.1111/jomf.12104",
          name: 'discord',
          image: '',
          title: 'Jennings, Elyse A. 2014. “Marital Discord and Subsequent Marital Dissolution: Perceptions of Both Wives and their Husbands.” Journal of Marriage and Family, 76:476-488.',
        },
        5: {
          index: 5,
          link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1728-4465.2013.00344.x?casa_token=7hpwM1xspI8AAAAA:TliuxR67uGFHo9qpWpkCRbktf1uC6uTspq4ZRP1VRAAMkE90IQnKQWQQZfPWEyGeRrcMExC9Kru5wHkl",
          name: 'preference',
          image: '',
          title: 'Jennings, Elyse A. and Jennifer S. Barber. 2013. “The Influence of Neighbors’ Family Size Preference on Women’s Progression to Higher Parity Pregnancies.” Studies in Family Planning, 44(1):67-84.',
        },
        6: {
          index: 6,
          link: "https://journals.sagepub.com/doi/abs/10.1177/0003122412464041",
          name: 'attitudes',
          image: '',
          title: 'Jennings, Elyse A., William G. Axinn, and Dirgha J. Ghimire. 2012. “The Effect of Parent Attitudes on Marriage Timing of Sons in Nepal.” American Sociological Review, 77(6):923-945.',
        }
      }
    }
  }

  changeHeader = () => {
    $('.navtitle').text("Research")
    $('.researchlink').css({
      'background': '#008274',
      'color': '#f7f7f0',
      'padding': '0 5px'
    })
    $('.homelink, .biolink, .contactlink, .gallerylink').css({
      'background': 'none',
      'color': '#008274',
      'padding': '0 5px'
    })
  }

  changeFooter = () => {
    $('.quote').text('"Creativity requires input, and that\'s what research is. You\'re gathering material with which to build."')
    $('.author').text('-Gene Luen Yang')
  }

  parallaxFooter = () => {
    $(window).scroll(function(){
      $(".footer-img").css("background-position", "0% "  + (($(window).scrollTop() / 60)) + "%");
    });
  }

  displayCards = () => {
    return Object.values(this.state.cards).map(card =>
      <Fade up>
        <div className="cardstuff">
            <a href={card.link}>
              <div className="cardborder" id={card.name}>
                <div className="title">{card.title}</div>
              </div>
            </a>
        </div>
      </Fade>
    )
  }


  render() {
    return (
      <div className="researchpage">
        {this.changeHeader()}
        {this.changeFooter()}
        {this.parallaxFooter()}
        <Fade up>
          <div className="research-text">Elyse has spent more than a decade studying family events and family dynamics across the life course and around the globe. Much of her time has been spent on understanding marriage, childbearing, and marital dissolution in South Asia. Her current work in aging in South Africa largely focuses on how marriage, widowhood, and divorce can impact one's receipt of social support, as well as their health outcomes.</div>
        </Fade>
        <div className="subtitle">Selected Publications</div>
        {this.displayCards()}
        <div className="space-home"></div>
        <Footer />
      </div>
    );
  };

}

export default Research
