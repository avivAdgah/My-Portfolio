// Google Analytics 4. Paste the Measurement ID ("G-XXXXXXXXXX") here.
// While it's empty, analytics and the consent banner stay switched off.
export const GA_MEASUREMENT_ID = "G-5K6SEJ9SZB";

const CONSENT_KEY = "analytics-consent"; // "granted" | "denied"

export const analyticsEnabled = Boolean(GA_MEASUREMENT_ID);

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage unavailable (private mode) — the choice just won't persist.
  }
  // Anonymous tally of choices (see netlify/functions/consent.mjs), so declines
  // are counted too. No cookies or visitor details are sent.
  fetch("/api/consent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ choice: value }),
    keepalive: true,
  }).catch(() => {});
}

let loaded = false;

// Loads gtag.js. Only called after the visitor accepts analytics cookies.
export function loadAnalytics() {
  if (!analyticsEnabled || loaded) return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // Page views are sent manually on every route change (it's a single-page app).
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackEvent(name, params = {}) {
  if (loaded && window.gtag) window.gtag("event", name, params);
}

export function trackPageView(path) {
  trackEvent("page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
