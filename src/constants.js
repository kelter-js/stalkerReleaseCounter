const RELEASE_YEAR = 2022;
const RELEASE_MONTH = 3;
const RELEASE_DAY = 28;

const RELEASE_DATE = new Date(RELEASE_YEAR, RELEASE_MONTH, RELEASE_DAY);

class Constants {
   static get releaseDate() {
     return RELEASE_DATE;
   }
}

export { Constants }
