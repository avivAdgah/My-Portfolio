import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import {
  analyticsEnabled,
  getConsent,
  setConsent,
  loadAnalytics,
  trackEvent,
  trackPageView,
} from "../analytics";
import "./Analytics.css";

// Where on the page a click happened, for the event's "location" parameter.
function clickLocation(el) {
  if (el.closest(".whatsapp-button")) return "floating_button";
  if (el.closest(".bot-panel")) return "project_bot";
  if (el.closest("#contact")) return "contact_section";
  if (el.closest("footer")) return "footer";
  if (el.closest(".case-study")) return "case_study_page";
  if (el.closest(".project-card")) return "project_card";
  return "other";
}

// One delegated listener covers every link and button on the site,
// so individual components don't need tracking code.
function handleClick(event) {
  const el = event.target.closest("a, button");
  if (!el) return;
  const location = clickLocation(el);

  if (el.matches(".bot-launcher")) {
    trackEvent("bot_open");
    return;
  }
  if (el.matches(".language-toggle")) {
    trackEvent("language_toggle");
    return;
  }

  const href = el.getAttribute("href");
  if (!href) return;

  if (href.includes("wa.me/")) trackEvent("whatsapp_click", { location });
  else if (href.startsWith("tel:")) trackEvent("phone_click", { location });
  else if (href.startsWith("mailto:")) trackEvent("email_click", { location });
  else if (href.startsWith("/work/"))
    trackEvent("case_study_click", { project: href.slice(6), location });
  else if (/^https?:\/\//.test(href) && !href.includes(window.location.host))
    trackEvent("live_site_click", { url: href, location });
}

export default function Analytics() {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const t = translations[language].consent;
  const [consent, setConsentState] = useState(getConsent);

  useEffect(() => {
    if (consent === "granted") loadAnalytics();
  }, [consent]);

  useEffect(() => {
    if (consent !== "granted") return;
    // Let Helmet update document.title before reporting the page view.
    const id = setTimeout(() => trackPageView(pathname), 100);
    return () => clearTimeout(id);
  }, [pathname, consent]);

  useEffect(() => {
    if (consent !== "granted") return;
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [consent]);

  if (!analyticsEnabled || consent) return null;

  const choose = (value) => {
    setConsent(value);
    setConsentState(value);
  };

  return (
    <div className="consent-banner" role="dialog" aria-label={t.title}>
      <p>{t.text}</p>
      <div className="consent-actions">
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() => choose("granted")}
        >
          {t.accept}
        </button>
        <button
          type="button"
          className="btn btn-sm btn-secondary"
          onClick={() => choose("denied")}
        >
          {t.decline}
        </button>
      </div>
    </div>
  );
}
