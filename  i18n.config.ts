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
      settings: 'settings',
      news: 'news',
      english: 'english',
      france: 'france',
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
      settings: 'paramètres',
      news: 'Nouvelles',
      english: 'anglaise',
      france: 'La France',
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
