const RELEASE_YEAR = 2022;
const RELEASE_MONTH = 3;
const RELEASE_DAY = 28;

const RELEASE_DATE = new Date(RELEASE_YEAR, RELEASE_MONTH, RELEASE_DAY);
const HTML_ELEMENT = document.documentElement;
const HEAD_META_TITLE = document.querySelector('meta[name="title"]');
const HEAD_DESCRIPTION = document.querySelector('meta[name="description"]');
const HEAD_TITLE = document.querySelector('title');

const RUSSIAN_VOCABULARY = {
  'htmlLanguage': 'ru',
  'metaTitle': 'Отсчет времени до релиза S.T.A.L.K.E.R. 2',
  'metaDescription': 'Для фанатов S.T.A.L.K.E.R. 2, удобный интерфейс для контроля количества времени до релиза.',
  'headTitle': 'S.T.A.L.K.E.R. 2 дата релиза',
};

const ENGLISH_VOCABULARY = {
  'htmlLanguage': 'en',
  'metaTitle': 'Final count until release date S.T.A.L.K.E.R. 2',
  'metaDescription': 'Pretty handy interface for counting till release date of S.T.A.L.K.E.R. 2',
  'headTitle': 'S.T.A.L.K.E.R. 2 release date',
};

class Constants {
   static get releaseDate () {
     return RELEASE_DATE;
   }

  static get htmlElement () {
    return HTML_ELEMENT;
  }

  static get headMetaTitle () {
    return HEAD_META_TITLE;
  }

  static get headMetaDescription () {
    return HEAD_DESCRIPTION;
  }

  static get headTitle () {
    return HEAD_TITLE;
  }

  static get russianVocabulary () {
    return RUSSIAN_VOCABULARY;
  }

  static get englishVocabulary () {
    return ENGLISH_VOCABULARY;
  }
}

export { Constants }
