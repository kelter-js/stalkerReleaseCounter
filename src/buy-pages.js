import React from 'react'

class BuyPages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLanguageuage: this.props.language,
    };

    this.ruVocabulary = {
      'official': 'Ссылка на официальный сайт',
      'steam': 'Ссылка на страницу в магазине Steam',
    };

    this.engVocabulary = {
      'official': 'Official page link',
      'steam': 'Steam page link',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.language != this.state.currentLanguageuage) {
      this.setState({currentLanguageuage: nextProps.language});
    }
  }

  render () {
    return (
      <React.Fragment>
        <div key='steamPage' className='timer__link-item'>
          <dt><p className='timer__link-text'>{(this.state.currentLanguageuage === 'ru' ? this.ruVocabulary.steam : this.engVocabulary.steam)}</p></dt>
          <dd><a href='https://store.steampowered.com/app/1643320/STALKER_2_Heart_of_Chernobyl/?l=russian' target='_blank' className='timer__steam-promo'></a></dd>
        </div>
        <div key='officialPage' className='timer__link-item'>
          <dt><p className='timer__link-text'>{(this.state.currentLanguageuage === 'ru' ? this.ruVocabulary.official : this.engVocabulary.official)}</p></dt>
          <dd><a href='https://www.stalker2.com/' target='_blank' className='timer__official-promo'></a></dd>
        </div>
      </React.Fragment>
    )
  }
}

export { BuyPages }
