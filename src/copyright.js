import React, {PureComponent} from 'react'

class Copyright extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      currentLanguage: this.props.language,
    };

    this.ruVocabulary = {
      'copyright': 'Все права принадлежат оригинальным правообладателям - GSC Game World',
      'reactPower': 'Создано с использованием React',
    };

    this.engVocabulary = {
      'copyright': 'All rights reserved by original owner - GSC Game World',
      'reactPower': 'Created with React power',
    };
  }

  static getDerivedStateFromProps (nextProps, state) {
    if (nextProps.language !== state.currentLanguage) {
      return {
        currentLanguage: nextProps.language,
      };
    }
    return null;
  }

  render () {
    return (
      <React.Fragment>
        <p className='footer__copyright'>{(this.state.currentLanguage === 'ru' ? this.ruVocabulary.copyright : this.engVocabulary.copyright)}</p>
        <p className='footer__text'>{(this.state.currentLanguage === 'ru' ? this.ruVocabulary.reactPower : this.engVocabulary.reactPower)}</p>
      </React.Fragment>
    )
  }
}

export { Copyright }
