import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: {
      search: 'Search',
      home: 'Home',
      details: 'Details',
      author: 'Author',
      time: 'Time',
      source: 'Source',
      settings: 'Settings',
      news: 'News',
      english: 'English',
      french: 'French',
      language: 'Language',
    },
  },
  fr: {
    translation: {
      search: 'Chercher',
      home: 'Domicile',
      details: 'Détails',
      author: 'Auteur',
      time: 'Temps',
      source: 'La Source',
      settings: 'Paramètres',
      news: 'Nouvelles',
      english: 'Anglaise',
      french: 'française',
      language: 'Langue',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
