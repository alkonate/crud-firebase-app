import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

i18n.use(initReactI18next).init({
    fallbackLng : ["en","fr"],
    lng : process.env.REACT_APP_LOCAL,
    resources: {
        en: {
          translations: require('./locales/en/translations.json'),
          authValidation: require('./locales/en/authValidation.json'),
          navigation: require('./locales/en/navigation.json'),
          signup: require('./locales/en/signup.json'),
          signin: require('./locales/en/signin.json'),
          sidebar: require('./locales/en/sidebar.json'),
          notfound: require('./locales/en/notfound.json'),
          store: require('./locales/en/store.json'),
        },
        fr: {
          translations: require('./locales/fr/translations.json'),
          authValidation: require('./locales/fr/authValidation.json'),
          navigation: require('./locales/fr/navigation.json'),
          signup: require('./locales/fr/signup.json'),
          signin: require('./locales/fr/signin.json'),
          sidebar: require('./locales/fr/sidebar.json'),
          notfound: require('./locales/fr/notfound.json'),
          store: require('./locales/fr/store.json'),

        }
      },
      ns: ['translations','authValidation','navigation','signup','signin','sidebar'],
      defaultNS: 'translations'
})
export default i18n