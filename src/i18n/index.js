import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

i18n.use(initReactI18next).init({
    fallbackLng : ["en","fr"],
    lng : "en",
    resources: {
        en: {
          translations: require('./locales/en/translations.json'),
          authValidation: require('./locales/en/authValidation.json'),
          navigation: require('./locales/en/navigation.json'),
          signup: require('./locales/en/signup.json'),
          signin: require('./locales/en/signin.json'),
        },
        fr: {
          translations: require('./locales/fr/translations.json'),
          authValidation: require('./locales/fr/authValidation.json'),
          navigation: require('./locales/fr/navigation.json'),
          signup: require('./locales/fr/signup.json'),
          signin: require('./locales/fr/signin.json'),
        }
      },
      ns: ['translations','authValidation','navigation','signup','signin'],
      defaultNS: 'translations'
})
export default i18n