import React, { Component } from 'react';
import $ from 'jquery'

import Fade from 'react-reveal/Fade';


class Research extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: {
        0: {
          index: 0,
          name: 'emotional',
          image: '',
          title: 'Jennings, Elyse A., Nolwazi Mkhwanazi, and Lisa F. Berkman. 2018. “Receipt of Emotional Support Among Rural South African Adults.” Ageing & Society.',
        },
        1: {
          index: 1,
          name: 'composition',
          image: '',
          title: 'Jennings, Elyse A. 2017. “Family Composition and Marital Dissolution in Rural Nepal, 1945–2008.” Population Studies, 71(2): 229-248.',
        },
        2: {
          index: 2,
          name: 'predictors',
          image: '',
          title: 'Jennings, Elyse A. 2016. “Predictors of Marital Dissolution during Rapid Social Change: Evidence from South Asia.” Demography, 53(5): 1351-1375.',
        },
        3: {
          index: 3,
          name: 'influence',
          image: '',
          title: 'Jennings, Elyse A. and Rachael S. Pierotti. 2016. “The Influence of Wives’ and Husbands’ Fertility Preferences on Progression to a Third Birth in Nepal, 1997–2009.” Population Studies, 70(1): 115-133.',
        },
        4: {
          index: 4,
          name: 'discord',
          image: '',
          title: 'Jennings, Elyse A. 2014. “Marital Discord and Subsequent Marital Dissolution: Perceptions of Both Wives and their Husbands.” Journal of Marriage and Family, 76:476-488.',
        },
        5: {
          index: 5,
          name: 'preference',
          image: '',
          title: 'Jennings, Elyse A. and Jennifer S. Barber. 2013. “The Influence of Neighbors’ Family Size Preference on Women’s Progression to Higher Parity Pregnancies.” Studies in Family Planning, 44(1):67-84.',
        },
        6: {
          index: 6,
          name: 'attitues',
          image: '',
          title: 'Jennings, Elyse A., William G. Axinn, and Dirgha J. Ghimire. 2012. “The Effect of Parent Attitudes on Marriage Timing of Sons in Nepal.” American Sociological Review, 77(6):923-945.',
        },
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

  displayCards = () => {
    return Object.values(this.state.cards).map(card =>
      <Fade left>
        <div className="cardborder" id={card.name}>
          <div className="title">{card.title}</div>
        </div>
      </Fade>
    )
  }


  render() {
    return (
      <div className="researchpage">
        <div className="research-text">Elyse has spent more than a decade studying family events and family dynamics across the life course and around the globe. Much of her time has been spent on understanding marriage, childbearing, and marital dissolution in South Asia. Her current work in aging in South Africa largely focuses on how marriage, widowhood, and divorce can impact one's receipt of social support, as well as their health outcomes.</div>
        {this.displayCards()}
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }

}

export default Research
