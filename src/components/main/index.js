import React, { PureComponent } from 'react'
import { TimeToRelease } from './time-to-release.js'
import { BuyPages } from './buy-pages.js'

class Main extends PureComponent {
  render() {
    return (
      <>
        <main className='page-main'>
          <section className='timer container'>
            <div className='timer__wrapper'>
              <h2 className='timer__header'>{(this.props.currentLanguage === 'ru') ? 'Отсчет времени до релиза\u00A0S.T.A.L.K.E.R.\u00A02' : 'Counter till release date\u00A0of\u00A0S.T.A.L.K.E.R.\u00A02'}</h2>
              <dl className='timer__time-difference-list'>
                <TimeToRelease key='monthCounter' date = { this.props.releaseDate } timeMethod='months' language={ this.props.currentLanguage } />
                <TimeToRelease key='daysCounter' date = { this.props.releaseDate } timeMethod='days' language={ this.props.currentLanguage } />
                <TimeToRelease key='hoursCounter' date = { this.props.releaseDate } timeMethod='hours' language={ this.props.currentLanguage } />
                <TimeToRelease key='minutesCounter' date = { this.props.releaseDate } timeMethod='minutes' language={ this.props.currentLanguage } />
                <TimeToRelease key='secondsCounter' date = { this.props.releaseDate } timeMethod='seconds' language={ this.props.currentLanguage } />
              </dl>
              <dl className='timer__link-list'>
                <BuyPages key='buyPages' language={ this.props.currentLanguage } />
              </dl>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export { Main }
