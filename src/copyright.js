import React from 'react'

class Copyright extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentLanguageuage: this.props.language,
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.language != this.state.currentLanguageuage) {
      this.setState({currentLanguageuage: nextProps.language});
    }
  }

  render () {
    return (
      <React.Fragment>
        <p className='footer__copyright'>{(this.state.currentLanguageuage === 'ru' ? this.ruVocabulary.copyright : this.engVocabulary.copyright)}</p>
        <p className='footer__text'>{(this.state.currentLanguageuage === 'ru' ? this.ruVocabulary.reactPower : this.engVocabulary.reactPower)}</p>
      </React.Fragment>
    )
  }
}

export { Copyright }
