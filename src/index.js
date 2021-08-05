import React from 'react'
import {render} from 'react-dom'
import './sass/style.sass'

const RELEASE_DATE = new Date(2022, 3, 28);

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
    this.daysInWeek = 7;
    this.monthsInYear = 12;

    this.timeMethods = {
      'months': this.getMonthsDifference.bind(this),
      'weeks': this.getWeeksDifference.bind(this),
      'days': this.getDaysDifference.bind(this),
      'hours': this.getHoursDifference.bind(this),
      'minutes': this.getMinutesDifference.bind(this),
      'seconds': this.getSecondsDifference.bind(this),
    };

    this.ruVocabulary = {
      'months': 'Месяцев',
      'weeks': 'Недель',
      'days': 'Дней',
      'hours': 'Часов',
      'minutes': 'Минут',
      'seconds': 'Секунд',
    }

    this.engVocabulary = {
      'months': 'Months',
      'weeks': 'Weeks',
      'days': 'Days',
      'hours': 'Hours',
      'minutes': 'Minutes',
      'seconds': 'Seconds',
    }

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage() {
    if (this.state.currentLang === 'ru') {
      this.setState({currentLang: 'eng'});
    } else {
      this.setState({currentLang: 'ru'});
    }
  }

  update(){
    this.setState({currentDate: new Date()});
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.update(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getMonthsDifference(finalDate, currentDate) {
    return finalDate.getMonth() - currentDate.getMonth() + (this.monthsInYear * (finalDate.getFullYear() - currentDate.getFullYear()));
  }

  getWeeksDifference(finalDate, currentDate) {
    return Math.floor((finalDate - currentDate) / (this.second * this.minute * this.hour * this.hoursInDay * this.daysInWeek));
  }

  getDaysDifference(finalDate, currentDate) {
    return Math.ceil((finalDate - currentDate) / (this.second * this.minute * this.hour * this.hoursInDay));
  }

  getHoursDifference(finalDate, currentDate) {
    return Math.ceil((finalDate - currentDate) / (this.second * this.minute * this.hour));
  }

  getMinutesDifference(finalDate, currentDate) {
    return Math.ceil((finalDate - currentDate) / (this.second * this.minute));
  }

  getSecondsDifference(finalDate, currentDate) {
    return Math.ceil(Math.abs(finalDate - currentDate) / this.second);
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

function MainApp () {
    return (
        <div className='timer__wrapper'>
            <dl className='timer__time-difference-list'>
              <TimeToRelease key = 'monthCounter' date = {RELEASE_DATE} timeMethod = 'months' language='ru'/>
              <TimeToRelease key = 'weekCounter' date = {RELEASE_DATE} timeMethod = 'weeks' language='ru'/>
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
    )
}

function FooterApp () {
  return (
    <div className='container'>
        <p className='footer__copyright'>Все права принадлежат оригинальным правообладателям - GSC Game World</p>
        <p className='footer__text'>Created with React power</p>
    </div>
  )
}

render (<MainApp/>, document.querySelector('.timer'));
render (<FooterApp/>, document.querySelector('.footer'));
