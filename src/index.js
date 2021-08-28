import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import { Constants } from './constants.js'
import { PageLanguage } from './change-page-language.js'
import './sass/style.sass'

const pageLanguageHandler = new PageLanguage (
  Constants.russianVocabulary,
  Constants.englishVocabulary
);

render (<App releaseDate = {Constants.releaseDate} pageLanguageHandler = {pageLanguageHandler.changeLanguage}/>, document.querySelector('.root'));
