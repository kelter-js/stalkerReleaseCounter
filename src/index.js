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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(e) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      const rootContainer = document.querySelector('.root');
      rootContainer.classList.add('errorContainer')
      return (
        <h1 className = 'errorMessage'>
          Что-то пошло не так!
        </h1>
      );
    }

    return this.props.children;
  }
}

render (
  <ErrorBoundary>
    <App releaseDate = {Constants.releaseDate} pageLanguageHandler = {pageLanguageHandler.changeLanguage}/>
  </ErrorBoundary>,
  document.querySelector('.root')
);
