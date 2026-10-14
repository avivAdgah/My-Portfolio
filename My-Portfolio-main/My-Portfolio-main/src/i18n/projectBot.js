/**
 * Script for the project planner bot. Each step asks one question:
 * - type "choice": pick one option (answers move on immediately)
 * - type "multi": pick several, then confirm
 * - type "text": free text, optionally skippable
 * Option ids are shared between languages so the summary and suggestions stay the same.
 */

const steps = {
  en: [
    {
      id: "kind",
      type: "choice",
      question: "Hi! I'm Aviv's project assistant 👋 I'll ask a few quick questions to understand what you need. What would you like to build?",
      options: [
        { id: "business", label: "Business website" },
        { id: "landing", label: "Landing page" },
        { id: "store", label: "Online store" },
        { id: "portfolio", label: "Portfolio / gallery" },
        { id: "webapp", label: "Web app / system" },
        { id: "unsure", label: "Not sure yet" },
      ],
    },
    {
      id: "field",
      type: "text",
      question: "Great choice. What's your business or field? (e.g. dental clinic, fashion brand, tour guide)",
      placeholder: "Your business or field",
      skippable: true,
    },
    {
      id: "current",
      type: "choice",
      question: "Do you have a website today?",
      options: [
        { id: "none", label: "No, starting from scratch" },
        { id: "redesign", label: "Yes, it needs a redesign" },
        { id: "extend", label: "Yes, it needs new features" },
      ],
    },
    {
      id: "features",
      type: "multi",
      question: "Which of these do you need? Pick all that apply.",
      confirm: "Continue",
      options: [
        { id: "contact", label: "Contact form & WhatsApp" },
        { id: "booking", label: "Online booking / appointments" },
        { id: "payments", label: "Products & online payments" },
        { id: "cms", label: "Edit content myself" },
        { id: "blog", label: "Blog / articles" },
        { id: "multilang", label: "Hebrew & English" },
        { id: "interactive", label: "3D / interactive experience" },
        { id: "seo", label: "SEO & Google visibility" },
      ],
    },
    {
      id: "content",
      type: "choice",
      question: "Do you already have a logo, texts and photos?",
      options: [
        { id: "ready", label: "Yes, everything is ready" },
        { id: "partial", label: "Some of it" },
        { id: "help", label: "I need help with that" },
      ],
    },
    {
      id: "budget",
      type: "choice",
      question: "What budget do you have in mind?",
      options: [
        { id: "b1", label: "Up to $1,000" },
        { id: "b2", label: "$1,000 – $2,500" },
        { id: "b3", label: "$2,500 – $5,000" },
        { id: "b4", label: "$5,000+" },
        { id: "b0", label: "Not sure yet" },
      ],
    },
    {
      id: "timeline",
      type: "choice",
      question: "And when would you like to launch?",
      options: [
        { id: "asap", label: "As soon as possible" },
        { id: "month", label: "Within a month" },
        { id: "quarter", label: "In 1–3 months" },
        { id: "flexible", label: "I'm flexible" },
      ],
    },
    {
      id: "name",
      type: "text",
      question: "Last one: what's your name?",
      placeholder: "Your name",
      skippable: false,
    },
  ],
  he: [
    {
      id: "kind",
      type: "choice",
      question: "היי! אני העוזר של אביב 👋 אשאל כמה שאלות קצרות כדי להבין מה אתם צריכים. מה תרצו לבנות?",
      options: [
        { id: "business", label: "אתר לעסק" },
        { id: "landing", label: "דף נחיתה" },
        { id: "store", label: "חנות אונליין" },
        { id: "portfolio", label: "תיק עבודות / גלריה" },
        { id: "webapp", label: "אפליקציית ווב / מערכת" },
        { id: "unsure", label: "עוד לא בטוח" },
      ],
    },
    {
      id: "field",
      type: "text",
      question: "מעולה. מה העסק או התחום שלכם? (למשל מרפאת שיניים, מותג אופנה, מדריך טיולים)",
      placeholder: "העסק או התחום",
      skippable: true,
    },
    {
      id: "current",
      type: "choice",
      question: "יש לכם אתר היום?",
      options: [
        { id: "none", label: "לא, מתחילים מאפס" },
        { id: "redesign", label: "כן, צריך עיצוב מחדש" },
        { id: "extend", label: "כן, צריך להוסיף יכולות" },
      ],
    },
    {
      id: "features",
      type: "multi",
      question: "מה מהדברים האלה אתם צריכים? אפשר לבחור כמה.",
      confirm: "המשך",
      options: [
        { id: "contact", label: "טופס יצירת קשר ווואטסאפ" },
        { id: "booking", label: "הזמנת תורים / הזמנות אונליין" },
        { id: "payments", label: "מוצרים ותשלום אונליין" },
        { id: "cms", label: "לערוך תוכן בעצמי" },
        { id: "blog", label: "בלוג / מאמרים" },
        { id: "multilang", label: "עברית ואנגלית" },
        { id: "interactive", label: "חוויה תלת-ממדית / אינטראקטיבית" },
        { id: "seo", label: "קידום בגוגל (SEO)" },
      ],
    },
    {
      id: "content",
      type: "choice",
      question: "יש לכם כבר לוגו, טקסטים ותמונות?",
      options: [
        { id: "ready", label: "כן, הכל מוכן" },
        { id: "partial", label: "חלק מזה" },
        { id: "help", label: "צריך עזרה עם זה" },
      ],
    },
    {
      id: "budget",
      type: "choice",
      question: "איזה תקציב יש לכם בראש?",
      options: [
        { id: "b1", label: "עד 3,500 ₪" },
        { id: "b2", label: "3,500 – 8,000 ₪" },
        { id: "b3", label: "8,000 – 15,000 ₪" },
        { id: "b4", label: "15,000 ₪ ומעלה" },
        { id: "b0", label: "עוד לא יודע" },
      ],
    },
    {
      id: "timeline",
      type: "choice",
      question: "ומתי תרצו לעלות לאוויר?",
      options: [
        { id: "asap", label: "כמה שיותר מהר" },
        { id: "month", label: "תוך חודש" },
        { id: "quarter", label: "בעוד 1–3 חודשים" },
        { id: "flexible", label: "אני גמיש" },
      ],
    },
    {
      id: "name",
      type: "text",
      question: "שאלה אחרונה: איך קוראים לך?",
      placeholder: "השם שלך",
      skippable: false,
    },
  ],
};

const ui = {
  en: {
    open: "Plan your project",
    title: "Project planner",
    subtitle: "Usually takes under a minute",
    close: "Close",
    skip: "Skip",
    send: "Send",
    restart: "Start over",
    summaryIntro: (name) => `Thanks${name ? `, ${name}` : ""}! Here's what I understood:`,
    examplesIntro: "Here's some similar work Aviv has built:",
    finishIntro: "Send this to Aviv and he'll get back to you with next steps:",
    sendWhatsApp: "Send on WhatsApp",
    sendEmail: "Send by email",
    labels: {
      kind: "Project",
      field: "Business",
      current: "Current website",
      features: "Needs",
      content: "Content",
      budget: "Budget",
      timeline: "Timeline",
      name: "Name",
    },
    messageHeader: "Hi Aviv, I filled in the project planner on your portfolio:",
    emailSubject: "New project inquiry from the portfolio",
    none: "—",
  },
  he: {
    open: "תכננו את הפרויקט",
    title: "מתכנן הפרויקט",
    subtitle: "לוקח בדרך כלל פחות מדקה",
    close: "סגירה",
    skip: "דלג",
    send: "שלח",
    restart: "להתחיל מחדש",
    summaryIntro: (name) => `תודה${name ? ` ${name}` : ""}! זה מה שהבנתי:`,
    examplesIntro: "הנה כמה עבודות דומות שאביב בנה:",
    finishIntro: "שלחו את זה לאביב והוא יחזור אליכם עם הצעדים הבאים:",
    sendWhatsApp: "שליחה בוואטסאפ",
    sendEmail: "שליחה במייל",
    labels: {
      kind: "פרויקט",
      field: "עסק",
      current: "אתר קיים",
      features: "צרכים",
      content: "תוכן",
      budget: "תקציב",
      timeline: "לוח זמנים",
      name: "שם",
    },
    messageHeader: "היי אביב, מילאתי את מתכנן הפרויקט בפורטפוליו שלך:",
    emailSubject: "פנייה חדשה מהפורטפוליו",
    none: "—",
  },
};

/** Portfolio projects to show as examples, by project kind (and a few features). */
export const examplesFor = (answers) => {
  const byKind = {
    business: ["fitcenter", "lawyer-landing-page", "interior-design-studio"],
    landing: ["lawyer-landing-page", "edie-homepage", "momentum-consulting"],
    store: ["shoply", "arava-botanics", "nordwalk-3d-store"],
    portfolio: ["photo-gallery", "interior-design-studio", "george-dylan-tour-guide"],
    webapp: ["sunyi-bali-resort", "nordwalk-3d-store", "weather-app"],
    unsure: ["sunyi-bali-resort", "fitcenter", "shoply"],
  };
  const ids = [...(byKind[answers.kind] || byKind.unsure)];
  const features = answers.features || [];
  if (features.includes("interactive")) ids.unshift("nordwalk-3d-store");
  if (features.includes("booking")) ids.unshift("sunyi-bali-resort");
  if (features.includes("payments")) ids.unshift("shoply");
  return [...new Set(ids)].slice(0, 3);
};

export default { steps, ui };
