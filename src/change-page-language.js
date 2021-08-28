import { Constants } from './constants'

class PageLanguage {
  constructor (russianVocabulary, englishVocabulary) {
    this.vocabulary = {
      'russian': russianVocabulary,
      'english': englishVocabulary,
    };

    this.languages = {
      'ru': this.changeToRussian.bind(this),
      'eng': this.changeToEnglish.bind(this),
    };

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeToRussian () {
    Constants.htmlElement.lang = this.vocabulary.russian.htmlLanguage;
    Constants.headMetaTitle.content = this.vocabulary.russian.metaTitle;
    Constants.headMetaDescription.content = this.vocabulary.russian.metaDescription;
    Constants.headTitle.text = this.vocabulary.russian.headTitle;
  }

  changeToEnglish () {
    Constants.htmlElement.lang = this.vocabulary.english.htmlLanguage;
    Constants.headMetaTitle.content = this.vocabulary.english.metaTitle;
    Constants.headMetaDescription.content = this.vocabulary.english.metaDescription;
    Constants.headTitle.text = this.vocabulary.english.headTitle;
  }

  changeLanguage (language) {
    this.languages[language]();
  }
}

export { PageLanguage }
