import React, {PureComponent} from 'react'

class Copyright extends PureComponent {
  constructor (props) {
    super(props);

    this.ruVocabulary = {
      'copyright': 'Все права принадлежат оригинальным правообладателям - GSC Game World',
      'reactPower': 'Создано с использованием React',
    };

    this.engVocabulary = {
      'copyright': 'All rights reserved by original owner - GSC Game World',
      'reactPower': 'Created with React power',
    };
  }

  render () {
    const currentLanguage = this.props.language;

    return (
      <React.Fragment>
        <p className='footer__copyright'>{(currentLanguage === 'ru' ? this.ruVocabulary.copyright : this.engVocabulary.copyright)}</p>
        <p className='footer__text'>{(currentLanguage === 'ru' ? this.ruVocabulary.reactPower : this.engVocabulary.reactPower)}</p>
      </React.Fragment>
    )
  }
}

export { Copyright }
