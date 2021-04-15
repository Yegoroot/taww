/* eslint-disable max-len */
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import { DEBUG_I18, DEFAULT_LANGUAGE } from '../constants'
import languageAR from './ar'
import languageEN from './en'

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: languageAR,
      en: languageEN
    },
    // lng: localStorage.getItem('i18nextLng') || DEFAULT_LANGUAGE, /* default language when load the website in browser */
    lng: DEFAULT_LANGUAGE, /* default language when load the website in browser */
    fallbackLng: localStorage.getItem('i18nextLng') || DEFAULT_LANGUAGE, /* When react i18next not finding any language to as default in borwser */

    debug: DEBUG_I18, /* debugger For Development environment */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    // react: {
    //   wait: true,
    //   bindI18n: 'languageChanged loaded',
    //   bindStore: 'added removed',
    //   nsMode: 'default'
    // }
  })

export default i18n
