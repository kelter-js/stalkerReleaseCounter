import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import { Constants } from './constants'
import './sass/style.sass'

render (<App releaseDate = {Constants.releaseDate}/>, document.querySelector('.root'));
