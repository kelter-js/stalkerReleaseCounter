import React from 'react'
import { render } from 'react-dom'
import { App } from './app.js'
import { Constants } from './constants.js'
import { PageLanguage } from './change-page-language.js'
import { ErrorBoundary } from './error.js'
import './sass/style.sass'

const pageLanguageHandler = new PageLanguage (
  Constants.russianVocabulary,
  Constants.englishVocabulary
);

render (
  <ErrorBoundary>
    <App releaseDate = {Constants.releaseDate} pageLanguageHandler = {pageLanguageHandler.changeLanguage}/>
  </ErrorBoundary>,
  document.querySelector('.root')
);
