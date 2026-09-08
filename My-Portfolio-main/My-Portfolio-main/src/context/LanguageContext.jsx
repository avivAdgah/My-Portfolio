import { useEffect, useState } from "react";
import { LanguageContext } from "./language-context";

function getInitialLanguage() {
  const stored = localStorage.getItem("language");
  if (stored === "en" || stored === "he") return stored;
  return "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "he" ? "rtl" : "ltr";
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "he" : "en"));

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
