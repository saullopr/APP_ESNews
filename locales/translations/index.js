import I18n from 'ex-react-native-i18n'

import en from './en.json';
import pt from './pt.json';
import es from './es.json';

I18n.translations = { en, pt, es }

export function change(lang) {
  I18n.locale = lang
}

export function t(name) {
  return I18n.t(name)
}