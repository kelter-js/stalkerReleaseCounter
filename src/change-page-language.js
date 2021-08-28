import { Constants } from './constants'

class PageLanguage {
  constructor (russianVocabulary, englishVocabulary) {
    this.vocabulary = {
      'russian': russianVocabulary,
      'english': englishVocabulary,
    };

    this.languages = [
      this.changeToRussian.bind(this),
      this.changeToEnglish.bind(this),
    ];

    this.currentIndex = 0;
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

  changeIndex () {
    (this.currentIndex === (this.languages.length - 1)) ? this.currentIndex = 0 : this.currentIndex++;
  }

  changeLanguage () {
    this.changeIndex();
    this.languages[this.currentIndex]();
  }
}

export { PageLanguage }
