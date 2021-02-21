import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Boxes": "Boxes",
      "SCG Foundation": "SCG Foundation",
      "About": "About",
      "Docs": "Docs",
      "Languages": "Languages",
      "English": "English",
      "Portuguese": "Portuguese (Português)",
      "Learn More": "Learn More",
      "Build Apps": "Build Apps",
      "Figment Learn": "Figment Learn",
      "Learn how to": "Learn How To:"
    }
  },
  pt: {
    translation: {
      "Boxes": "Boxes",
      "SCG Foundation": "Fundação SCG",
      "About": "Sobre",
      "Docs": "Docs",
      "Languages": "Línguas",
      "English": "Inglês",
      "Portuguese": "Português",
      "Learn More": "Saber Mais",
      "Build Apps": "Construir Apps",
      "Figment Learn": "Aprender Figment",
      "Learn how to": "Aprende como:"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false
  }
});

export default i18n;