import { ReactNode, useEffect, useState } from "react";
import { translations } from "@/lib/translations";
import { I18nContext, Language } from "./languageContext";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get saved language or detect from browser
    const savedLanguage = localStorage.getItem("language") as Language;
    const browserLanguage = navigator.language.split("-")[0] as Language;

    const defaultLanguage =
      savedLanguage && ["pt", "en", "es"].includes(savedLanguage)
        ? savedLanguage
        : ["pt", "en", "es"].includes(browserLanguage)
        ? browserLanguage
        : "pt";

    setLanguageState(defaultLanguage);
    setIsLoading(false);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);

    // Update document language
    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : lang === "en" ? "en-US" : "es-ES";
  };

  const t = (key: string): string => {
    if (isLoading) return "";

    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback to English
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key;
          }
        }
        break;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
}
