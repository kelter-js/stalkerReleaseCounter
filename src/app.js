import React, {PureComponent} from 'react'
import { TimeToRelease } from './time-to-release'
import { BuyPages } from './buy-pages'
import { Copyright } from './copyright'

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentLanguage: 'ru',
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  render () {
    const currentLanguage = this.state.currentLanguage;
    const releaseDate = this.props.releaseDate;

    return (
      <React.Fragment>
        <header className = 'page-header'>
          <h1 className = 'visually-hidden'>{(currentLanguage === 'ru') ? 'Отсчет времени до релиза S.T.A.L.K.E.R. 2' : 'Counter till release date of S.T.A.L.K.E.R. 2'}</h1>
          <div className = 'container page-header__wrapper'>
            <button onClick = {this.clickHandler} className = 'page-header__change-language'>{currentLanguage}</button>
          </div>
        </header>
        <main className = 'page-main'>
          <section className = 'timer container'>
            <div className = 'timer__wrapper'>
              <h2 className='timer__header'>{(currentLanguage === 'ru') ? 'Отсчет времени до релиза\u00A0S.T.A.L.K.E.R.\u00A02' : 'Counter till release date\u00A0of\u00A0S.T.A.L.K.E.R.\u00A02'}</h2>
              <dl className = 'timer__time-difference-list'>
                <TimeToRelease key = 'monthCounter' date = {releaseDate} timeMethod = 'months' language = {currentLanguage}/>
                <TimeToRelease key = 'daysCounter' date = {releaseDate} timeMethod = 'days' language = {currentLanguage}/>
                <TimeToRelease key = 'hoursCounter' date = {releaseDate} timeMethod = 'hours' language = {currentLanguage}/>
                <TimeToRelease key = 'minutesCounter' date = {releaseDate} timeMethod = 'minutes' language = {currentLanguage}/>
                <TimeToRelease key = 'secondsCounter' date = {releaseDate} timeMethod = 'seconds' language = {currentLanguage}/>
              </dl>
              <dl className = 'timer__link-list'>
                <BuyPages key = 'buyPages' language={currentLanguage}/>
              </dl>
            </div>
          </section>
        </main>
        <footer>
          <section className='container'><Copyright key = 'copyright' language = {currentLanguage}/></section>
        </footer>
      </React.Fragment>
    )
  }

  clickHandler () {
    const currentLanguage = this.state.currentLanguage;

    (currentLanguage === 'ru') ? this.setState({currentLanguage: 'eng'}) : this.setState({currentLanguage: 'ru'});
  }
}

export { App }
