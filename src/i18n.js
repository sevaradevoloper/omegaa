import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { demos: "Demos", pages: "Pages", support: "Support", btn: "Get Started" } },
    uz: { translation: { demos: "Demolar", pages: "Sahifalar", support: "Yordam", btn: "Boshlash" } },
    ru: { translation: { demos: "Демо", pages: "Страницы", support: "Поддержка", btn: "Начать" } },
  },
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;