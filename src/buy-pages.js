import React, {PureComponent} from 'react'

class BuyPages extends PureComponent {
  constructor(props) {
    super(props);

    this.ruVocabulary = {
      'official': 'Ссылка на официальный сайт',
      'steam': 'Ссылка на страницу в магазине Steam',
    };

    this.engVocabulary = {
      'official': 'Official page link',
      'steam': 'Steam page link',
    };
  }

  render () {
    const currentLanguage = this.props.language;

    return (
      <React.Fragment>
        <div key='steamPage' className='timer__link-item'>
          <dt><p className='timer__link-text'>{(currentLanguage === 'ru' ? this.ruVocabulary.steam : this.engVocabulary.steam)}</p></dt>
          <dd>
            <a href='https://store.steampowered.com/app/1643320/STALKER_2_Heart_of_Chernobyl/?l=russian' target='_blank' rel='noreferrer' className='timer__steam-promo'>
              <span className='visually-hidden'>Ссылка на магазин в стиме.</span>
            </a>
          </dd>
        </div>
        <div key='officialPage' className='timer__link-item'>
          <dt><p className='timer__link-text'>{(currentLanguage === 'ru' ? this.ruVocabulary.official : this.engVocabulary.official)}</p></dt>
          <dd>
            <a href='https://www.stalker2.com/' target='_blank' rel='noreferrer' className='timer__official-promo'>
              <span className='visually-hidden'>Ссылка на официальный магазин.</span>
            </a>
          </dd>
        </div>
      </React.Fragment>
    )
  }
}

export { BuyPages }
