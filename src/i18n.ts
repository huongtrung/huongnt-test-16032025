import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "@/assets/locales/en.json"
import fr from "@/assets/locales/fr.json"

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
