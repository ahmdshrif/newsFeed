import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: {
      search: 'search',
      home: 'Home',
      details: 'details',
      author: 'author',
      time: 'time',
      source: 'source',
    },
  },
  fr: {
    translation: {
      search: 'chercher',
      home: 'domicile',
      details: 'détails',
      author: 'auteur',
      time: 'temps',
      source: 'la source',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
