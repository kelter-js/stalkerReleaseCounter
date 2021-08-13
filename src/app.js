import React, {PureComponent} from 'react'
import { TimeToRelease } from './time-to-release'
import { BuyPages } from './buy-pages'
import { Copyright } from './copyright'

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentLanguage: this.props.language,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  render () {
    return (
      <React.Fragment>
        <header className = 'page-header'>
          <h1 className = 'visually-hidden'>{(this.state.currentLanguage === 'ru') ? 'Отсчет времени до релиза S.T.A.L.K.E.R. 2' : 'Counter till release date of S.T.A.L.K.E.R. 2'}</h1>
          <div className = 'container page-header__wrapper'>
            <button onClick = {this.clickHandler} className = 'page-header__change-language'>{this.state.currentLanguage}</button>
          </div>
        </header>
        <main className = 'page-main'>
          <section className = 'timer container'>
            <div className = 'timer__wrapper'>
              <h2 className='timer__header'>{(this.state.currentLanguage === 'ru') ? 'Отсчет времени до релиза\u00A0S.T.A.L.K.E.R.\u00A02' : 'Counter till release date\u00A0of\u00A0S.T.A.L.K.E.R.\u00A02'}</h2>
              <dl className = 'timer__time-difference-list'>
                <TimeToRelease key = 'monthCounter' date = {this.props.releaseDate} timeMethod = 'months' language = {this.state.currentLanguage}/>
                <TimeToRelease key = 'daysCounter' date = {this.props.releaseDate} timeMethod = 'days' language = {this.state.currentLanguage}/>
                <TimeToRelease key = 'hoursCounter' date = {this.props.releaseDate} timeMethod = 'hours' language = {this.state.currentLanguage}/>
                <TimeToRelease key = 'minutesCounter' date = {this.props.releaseDate} timeMethod = 'minutes' language = {this.state.currentLanguage}/>
                <TimeToRelease key = 'secondsCounter' date = {this.props.releaseDate} timeMethod = 'seconds' language = {this.state.currentLanguage}/>
              </dl>
              <dl className = 'timer__link-list'>
                <BuyPages key = 'buyPages' language={this.state.currentLanguage}/>
              </dl>
            </div>
          </section>
        </main>
        <footer>
          <section className='container'><Copyright key = 'copyright' language = {this.state.currentLanguage}/></section>
        </footer>
      </React.Fragment>
    )
  }

  clickHandler () {
    (this.state.currentLanguage === 'ru') ? this.setState({currentLanguage: 'eng'}) : this.setState({currentLanguage: 'ru'});
  }
}

export { App }
