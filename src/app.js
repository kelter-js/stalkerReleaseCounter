import React, {PureComponent} from 'react'
import { Header } from './components/header/index.js'
import { Main } from './components/main/index.js'
import { Footer } from './components/footer/index.js'

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentLanguage: 'ru',
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler () {
    const currentLanguage = this.state.currentLanguage;
    (currentLanguage === 'ru') ? this.setState({currentLanguage: 'eng'}) : this.setState({currentLanguage: 'ru'});
  }

  render () {
    const currentLanguage = this.state.currentLanguage;
    const releaseDate = this.props.releaseDate;
    const pageLanguageHandler = this.props.pageLanguageHandler;
    pageLanguageHandler(this.state.currentLanguage);

    return (
      <React.Fragment>
        <Header clickHandler = { this.clickHandler } currentLanguage = { currentLanguage }/>
        <Main currentLanguage = { currentLanguage } releaseDate = { releaseDate }/>
        <Footer currentLanguage = { currentLanguage }/>
      </React.Fragment>
    )
  }
}

export { App }
