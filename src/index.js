import React from 'react'
import {render} from 'react-dom'
import './sass/style.sass'

function MainApp () {
    return (
        <div className='timer__wrapper'>
            <h1>Start</h1>
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
