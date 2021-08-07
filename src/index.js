import React from 'react'
import {render} from 'react-dom'
import './sass/style.sass'

const RELEASE_YEAR = 2022;
const RELEASE_MONTH = 3;
const RELEASE_DAY = 28;

const RELEASE_DATE = new Date(RELEASE_YEAR, RELEASE_MONTH, RELEASE_DAY);

class TimeToRelease extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: this.props.date,
      currentDate: new Date(),
      timeMethod: this.props.timeMethod,
      currentLanguage: this.props.language,
    };

    this.second = 1000;
    this.minute = 60;
    this.hour = 60;
    this.hoursInDay = 24;
    this.monthsInYear = 12;
    this.minDelay = 100;

    this.timeMethods = {
      'months': this.getMonthsDifference.bind(this),
      'days': this.getDaysDifference.bind(this),
      'hours': this.getHoursDifference.bind(this),
      'minutes': this.getMinutesDifference.bind(this),
      'seconds': this.getSecondsDifference.bind(this),
    };

    this.ruVocabulary = {
      'months': 'Месяцев',
      'days': 'Дней',
      'hours': 'Часов',
      'minutes': 'Минут',
      'seconds': 'Секунд',
    }

    this.engVocabulary = {
      'months': 'Months',
      'days': 'Days',
      'hours': 'Hours',
      'minutes': 'Minutes',
      'seconds': 'Seconds',
    }
  }

  calcAmountOfDays(month, year) {
    return new Date(year, month, 0).getDate();
  }

  calcDays() {
    let sum = 0;
    const diffDate = this.state.currentDate;
    diffDate.setMonth(diffDate.getMonth() + 1);
    diffDate.setDate(1);
    while (true) {
      if (diffDate.getMonth() !== this.state.date.getMonth()) {
        sum += this.calcAmountOfDays(diffDate.getMonth(), diffDate.getFullYear());
        diffDate.setMonth(diffDate.getMonth() + 1);
        continue;
      }
      diffDate.setMonth(diffDate.getMonth() - 1);
      sum += this.calcAmountOfDays(diffDate.getMonth(), diffDate.getFullYear());
      break;
    }
    return sum;
  }

  update(){
    this.setState({currentDate: new Date()});
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.update(), this.minDelay);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.language != this.state.currentLanguage) {
      this.setState({currentLanguage: nextProps.language});
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getMonthsDifference(finalDate, currentDate) {
    return new Date(finalDate - currentDate).getMonth();
  }

  getDaysDifference(finalDate, currentDate) {
    return Math.ceil((finalDate - currentDate) / (this.second * this.minute * this.hour * this.hoursInDay)) - this.calcDays();
  }

  getHoursDifference(finalDate, currentDate) {
    return this.hoursInDay - (currentDate.getHours() + 1);
  }

  getMinutesDifference(finalDate, currentDate) {
    return this.minute - (currentDate.getMinutes() + 1);
  }

  getSecondsDifference(finalDate, currentDate) {
    return this.minute - (currentDate.getSeconds() + 1);
  }

  render() {
    const finalDate = this.state.date;
    const currentDate = this.state.currentDate;

    return (
      <div className='timer__time-difference-item'>
        <dt><p>{this.state.currentLanguage === 'ru' ? `${this.ruVocabulary[this.state.timeMethod]} до релиза` : `${this.engVocabulary[this.state.timeMethod]} till release`}</p></dt>
        <dd><p>{this.timeMethods[this.state.timeMethod](finalDate, currentDate)}</p></dd>
      </div>
    );

  }
}

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

class App extends React.Component {
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
              <dl className = 'timer__time-difference-list'>
                <TimeToRelease key = 'monthCounter' date = {RELEASE_DATE} timeMethod = 'months' language = {this.state.currentLanguage}/>
                <TimeToRelease key = 'daysCounter' date = {RELEASE_DATE} timeMethod = 'days' language = {this.state.currentLanguage}/>
                <TimeToRelease key = 'hoursCounter' date = {RELEASE_DATE} timeMethod = 'hours' language = {this.state.currentLanguage}/>
                <TimeToRelease key = 'minutesCounter' date = {RELEASE_DATE} timeMethod = 'minutes' language = {this.state.currentLanguage}/>
                <TimeToRelease key = 'secondsCounter' date = {RELEASE_DATE} timeMethod = 'seconds' language = {this.state.currentLanguage}/>
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


render (<App language = 'ru'/>, document.querySelector('.root'));
