
const en = {
  'pt' : 'Portuguese',
  'en' : 'English',
  'es' : 'Spanish',
}

const pt_br = {
  'pt' : 'Português',
  'en' : 'Inglês',
  'es' : 'Espanhol',
}

const es = {
  'pt' : 'Portugués',
  'en' : 'Inglés',
  'es' : 'Español',
}

const i18n = (key, lang) => {
  switch(lang) {
    case 'en':
      return en[key]
    case 'es':
      return es[key]
    default:
      return pt_br[key]
  }
}