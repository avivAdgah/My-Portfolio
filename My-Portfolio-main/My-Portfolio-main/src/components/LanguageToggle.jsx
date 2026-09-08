import { useLanguage } from "../context/useLanguage";
import "./LanguageToggle.css";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const isHebrew = language === "he";

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={isHebrew ? "Switch to English" : "עבור לעברית"}
      aria-pressed={isHebrew}
    >
      <span className="language-toggle-track">
        <span className="language-toggle-thumb">
          {isHebrew ? "עב" : "EN"}
        </span>
      </span>
    </button>
  );
}
