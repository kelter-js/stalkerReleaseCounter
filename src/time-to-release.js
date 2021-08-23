import React, {PureComponent} from 'react'

class TimeToRelease extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
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
      if (diffDate.getMonth() !== this.props.date.getMonth()) {
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

  static getDerivedStateFromProps (nextProps, state) {
    if (nextProps.language !== state.currentLanguage) {
      return {
        currentLanguage: nextProps.language,
      };
    }
    return null;
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getMonthsDifference(currentDate, finalDate) {
    return new Date(finalDate - currentDate).getMonth();
  }

  getDaysDifference(currentDate, finalDate) {
    return Math.ceil((finalDate - currentDate) / (this.second * this.minute * this.hour * this.hoursInDay)) - this.calcDays();
  }

  getHoursDifference(currentDate) {
    return this.hoursInDay - (currentDate.getHours() + 2);
  }

  getMinutesDifference(currentDate) {
    return this.minute - (currentDate.getMinutes() + 1);
  }

  getSecondsDifference(currentDate) {
    return this.minute - (currentDate.getSeconds() + 1);
  }

  render() {
    const finalDate = this.props.date;
    const currentDate = this.state.currentDate;
    const timeMethod = this.props.timeMethod;
    const currentLanguage = this.props.language;

    return (
      <div className='timer__time-difference-item'>
        <dt>
          <p className='timer__time-difference-title'>{currentLanguage === 'ru' ? `${this.ruVocabulary[timeMethod]} до релиза` : `${this.engVocabulary[timeMethod]} till release`}</p>
        </dt>
        <dd>
          <p className='timer__time-difference-amount'>{this.timeMethods[timeMethod](currentDate, finalDate)}</p>
        </dd>
      </div>
    );

  }
}

export { TimeToRelease }
