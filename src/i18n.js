import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Permite cargar traducciones desde archivos
  .use(LanguageDetector) // Detecta el idioma del navegador automáticamente
  .use(initReactI18next) // Integra i18n con React
  .init({
    fallbackLng: "es", // Idioma por defecto
    debug: true, // Cambiar a false en producción
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Ruta de los archivos JSON
    },
    interpolation: {
      escapeValue: false, // React ya maneja la seguridad contra XSS
    },
  });

export default i18n;
