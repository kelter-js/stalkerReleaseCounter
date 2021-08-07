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
      currentLang: this.props.language,
    };

    this.second = 1000;
    this.minute = 60;
    this.hour = 60;
    this.hoursInDay = 24;
    this.monthsInYear = 12;
    this.minDelay = 100;

    console.log(new Date(this.state.date - this.state.currentDate));

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
        <dt><p>{this.state.currentLang === 'ru' ? `${this.ruVocabulary[this.state.timeMethod]} до релиза` : `${this.engVocabulary[this.state.timeMethod]} till release`}</p></dt>
        <dd><p>{this.timeMethods[this.state.timeMethod](finalDate, currentDate)}</p></dd>
      </div>
    );

  }
}

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      currentLang: 'ru',
    };
  }

  onClick () {
    return 1;
  }

  render () {
    return (
      <React.Fragment>
        <header>
          <h1 className="visually-hidden">Отсчет времени до релиза S.T.A.L.K.E.R. 2</h1>
          <div className='container'></div>
        </header>
        <main className='page-main'>
          <section className='timer container'>
            <div className='timer__wrapper'>
              <dl className='timer__time-difference-list'>
                <TimeToRelease key = 'monthCounter' date = {RELEASE_DATE} timeMethod = 'months' language='ru'/>
                <TimeToRelease key = 'daysCounter' date = {RELEASE_DATE} timeMethod = 'days' language='ru'/>
                <TimeToRelease key = 'hoursCounter' date = {RELEASE_DATE} timeMethod = 'hours' language='ru'/>
                <TimeToRelease key = 'minutesCounter' date = {RELEASE_DATE} timeMethod = 'minutes' language='ru'/>
                <TimeToRelease key = 'secondsCounter' date = {RELEASE_DATE} timeMethod = 'seconds' language='ru'/>
              </dl>
              <dl className='timer__link-list'>
                <div className='timer__link-item'>
                  <dt><p className='timer__link-text'>Ссылка на страницу в магазине Steam</p></dt>
                  <dd><a href='https://store.steampowered.com/app/1643320/STALKER_2_Heart_of_Chernobyl/?l=russian' target='_blank' className='timer__steam-promo'></a></dd>
                </div>
                <div className='timer__link-item'>
                  <dt><p className='timer__link-text'>Ссылка на официальный сайт</p></dt>
                  <dd><a href='https://www.stalker2.com/' target='_blank' className='timer__official-promo'></a></dd>
                </div>
              </dl>
            </div>
          </section>
        </main>
        <footer>
          <section className='container'>
            <p className='footer__copyright'>Все права принадлежат оригинальным правообладателям - GSC Game World</p>
            <p className='footer__text'>Created with React power</p>
          </section>
        </footer>
      </React.Fragment>
    )
  }
}


render (<App/>, document.querySelector('.root'));
