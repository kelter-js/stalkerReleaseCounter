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
    };
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
    return finalDate.getMonth() - currentDate.getMonth() + (12 * (finalDate.getFullYear() - currentDate.getFullYear()));
  }

  getSecondsDifference(finalDate, currentDate) {
    return Math.ceil(Math.abs(finalDate - currentDate) / 1000);
  }

  render() {
    const finalDate = this.state.date
    const currentDate = this.state.currentDate
    return (
      <dl className='timer__time-difference-list'>
        <div className='timer__time-difference-item'>
          <dt><p>Месяцев до релиза</p></dt>
          <dd><p>{this.getMonthsDifference(finalDate, currentDate)}</p></dd>
        </div>
        <div className='timer__time-difference-item'>
          <dt><p>Секунд до релиза</p></dt>
          <dd><p>{this.getSecondsDifference(finalDate, currentDate)}</p></dd>
        </div>
      </dl>
    );
  }
}

function MainApp () {
    return (
        <div className='timer__wrapper'>
            <TimeToRelease key = 'TimerContainer' date = {RELEASE_DATE}/>
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
