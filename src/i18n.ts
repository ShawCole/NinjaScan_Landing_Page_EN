import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from '../public/locales/en/common.json';
import esTranslations from '../public/locales/es/common.json';
import deTranslations from '../public/locales/de/common.json';
import frTranslations from '../public/locales/fr/common.json';
import itTranslations from '../public/locales/it/common.json';

const resources = {
    en: {
        common: enTranslations
    },
    de: {
        common: deTranslations
    },
    es: {
        common: esTranslations
    },
    fr: {
        common: frTranslations
    },
    it: {
        common: itTranslations
    }
};

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        supportedLngs: ['en', 'de', 'es', 'fr', 'it'],

        interpolation: {
            escapeValue: false,
        },

        // Only use backend in production
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        detection: {
            order: ['path', 'navigator'],
            lookupFromPathIndex: 0,
        },

        ns: ['common'],
        defaultNS: 'common',

        // Debug mode for development
        debug: import.meta.env.DEV,
    });

export default i18n; 