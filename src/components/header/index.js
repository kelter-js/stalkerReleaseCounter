import React, { PureComponent } from 'react'

class Header extends PureComponent {
  render() {
    return (
      <>
        <header className='page-header'>
          <h1 className='visually-hidden'>{(this.props.currentLanguage === 'ru') ? 'Отсчет времени до релиза S.T.A.L.K.E.R. 2' : 'Counter till release date of S.T.A.L.K.E.R. 2'}</h1>
          <div className='container page-header__wrapper'>
            <button onClick={ this.props.clickHandler } className='page-header__change-language'>{ this.props.currentLanguage }</button>
          </div>
        </header>
      </>
    );
  }
}

export { Header }
