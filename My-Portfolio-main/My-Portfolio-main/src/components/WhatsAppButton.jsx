import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./WhatsAppButton.css";

// International format, digits only (972 + number without the leading 0).
export const WHATSAPP_NUMBER = "972526428809";

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const t = translations[language].whatsapp;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.message)}`;

  return (
    <a
      href={href}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.label}
      title={t.label}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.96 12.96 0 0 0 16.04 29C23.2 29 29 23.18 29 16S23.2 3 16.04 3zm0 23.8c-1.98 0-3.92-.53-5.61-1.53l-.4-.24-3.97 1.04 1.06-3.86-.26-.4A10.77 10.77 0 0 1 5.2 16c0-5.97 4.86-10.82 10.84-10.82 5.97 0 10.8 4.85 10.8 10.82 0 5.97-4.83 10.8-10.8 10.8zm5.93-8.09c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.16-.21.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.5.14-.67.15-.15.33-.38.49-.57.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71 0 1.6 1.17 3.15 1.33 3.37.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.93-.79 2.2-1.55.27-.76.27-1.42.19-1.55-.08-.14-.3-.22-.63-.38z"
        />
      </svg>
      <span className="whatsapp-tooltip">{t.label}</span>
    </a>
  );
}
