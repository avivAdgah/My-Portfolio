const projects = [
  {
    id: "shoply",
    name: "Shoply",
    image: "shoply.jpg",
    industryLabel: "E-Commerce Website",
    description:
      "A demo e-commerce shopping app with a product catalog, search and filtering, a shopping cart with coupon support, user authentication, and a full checkout flow.",
    highlights: [
      "Product catalog with search & filtering",
      "Cart with quantity & coupon support",
      "Auth-protected checkout flow",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "React Router"],
    liveUrl: "https://shoply-main.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/shopy-app-website-main",
    category: "E-commerce",
    status: "Completed",
    featured: true,
    caseStudy: {
      purpose:
        "Built to show what a complete online store looks like when it's built custom rather than assembled from a template — from product discovery all the way to checkout.",
      challenge:
        "E-commerce is one of the more complex site types to get right: product discovery, cart state, coupon codes, authentication and checkout all need to work together smoothly, on every device, without confusing the shopper.",
      solution:
        "A complete shopping flow was built from product catalog through cart, coupon codes, authentication and a protected checkout, giving a real sense of how a custom store would work for an actual business.",
      designApproach:
        "A clean, familiar e-commerce layout keeps the focus on products and reduces friction at every step of the funnel, from search and filtering through to completing an order.",
      keyFeatures: [
        "Product catalog with search and filtering",
        "Cart with quantity and coupon support",
        "Auth-protected checkout flow",
        "Responsive layout across product, cart and checkout screens",
      ],
      responsive:
        "The catalog, cart and checkout are all fully responsive, so the shopping flow works the same on mobile as it does on desktop.",
      screenshots: ["shoply.jpg", "checkOut.jpg"],
    },
    he: {
      industryLabel: "אתר מסחר אלקטרוני",
      description:
        "אפליקציית מסחר אלקטרוני להדגמה עם קטלוג מוצרים, חיפוש וסינון, עגלת קניות עם תמיכה בקופונים, הזדהות משתמשים, ותהליך רכישה מלא.",
      highlights: [
        "קטלוג מוצרים עם חיפוש וסינון",
        "עגלה עם כמויות ותמיכה בקופונים",
        "תהליך רכישה מוגן בהזדהות",
      ],
      category: "מסחר אלקטרוני",
      caseStudy: {
        purpose:
          "נבנה כדי להראות איך נראית חנות אונליין שלמה כשהיא נבנית בהתאמה אישית ולא מורכבת מתבנית מוכנה — מגילוי מוצרים ועד לתשלום.",
        challenge:
          "מסחר אלקטרוני הוא אחד מסוגי האתרים המורכבים ביותר לבנייה נכונה: גילוי מוצרים, ניהול עגלה, קודי קופון, הזדהות ותשלום — כל אלה צריכים לעבוד יחד בצורה חלקה, בכל מכשיר, בלי לבלבל את הקונה.",
        solution:
          "נבנה תהליך קנייה מלא – מקטלוג המוצרים, דרך העגלה, קודי הקופון וההזדהות, ועד לתשלום מוגן – שנותן תחושה אמיתית איך חנות בהתאמה אישית הייתה עובדת עבור עסק אמיתי.",
        designApproach:
          "פריסת מסחר אלקטרוני נקייה ומוכרת שומרת על המיקוד במוצרים ומצמצמת חיכוך בכל שלב במשפך – מחיפוש וסינון ועד להשלמת ההזמנה.",
        keyFeatures: [
          "קטלוג מוצרים עם חיפוש וסינון",
          "עגלה עם כמויות ותמיכה בקופונים",
          "תהליך תשלום מוגן בהזדהות",
          "פריסה רספונסיבית במסכי מוצר, עגלה ותשלום",
        ],
        responsive:
          "הקטלוג, העגלה והתשלום כולם רספונסיביים לחלוטין, כך שתהליך הקנייה עובד באותה צורה במובייל כמו בדסקטופ.",
      },
    },
  },
  {
    id: "fitcenter",
    name: "FitCenter",
    image: "fitCenter.jpg",
    industryLabel: "Fitness Business Website",
    description:
      "A marketing landing page for a Tel Aviv gym, built with Next.js and Tailwind CSS, showcasing personal training, group classes, and nutrition programs with a working contact form.",
    highlights: [
      "Built with Next.js (App Router)",
      "Styled with Tailwind CSS",
      "Contact form with API route",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://fitcenterr.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/FitCenter",
    category: "Business Website",
    status: "Completed",
    featured: true,
    caseStudy: {
      purpose:
        "Built to present a gym's personal training, group classes and nutrition programs clearly, and turn visitors into leads rather than just showing off a template.",
      challenge:
        "A gym's website needs to sell a membership decision fast — visitors want to quickly see what's on offer, feel the energy of the space, and know how to get in touch, without wading through text.",
      solution:
        "A business-focused structure leads with a strong hero and clear service breakdown, followed by a gallery and a working contact form, so the site functions as a lead-generation tool rather than a static brochure.",
      designApproach:
        "Bold imagery and a high-contrast layout reflect the energy of a fitness brand, while a clear content hierarchy keeps services and the call-to-action easy to find on every screen.",
      keyFeatures: [
        "Dedicated sections for personal training, group classes and nutrition programs",
        "Responsive navigation and mobile-first layout",
        "Working contact form wired to a Next.js API route",
        "Clear calls-to-action throughout the page",
      ],
      responsive:
        "Built mobile-first, with the navigation, gallery and forms all tested to work cleanly on phones and tablets, not just desktop.",
      screenshots: ["fitCenter.jpg"],
    },
    he: {
      industryLabel: "אתר עסקי לחדר כושר",
      description:
        "עמוד נחיתה שיווקי לחדר כושר בתל אביב, שנבנה עם Next.js ו-Tailwind CSS, ומציג אימון אישי, שיעורי קבוצה ותוכניות תזונה, עם טופס יצירת קשר פעיל.",
      highlights: [
        "נבנה עם Next.js (App Router)",
        "עוצב עם Tailwind CSS",
        "טופס יצירת קשר עם API route",
      ],
      category: "אתר עסקי",
      caseStudy: {
        purpose:
          "נבנה כדי להציג בצורה ברורה את האימון האישי, שיעורי הקבוצה ותוכניות התזונה של חדר הכושר, ולהפוך מבקרים ללידים ולא רק להציג תבנית.",
        challenge:
          "אתר של חדר כושר צריך למכור החלטת הרשמה מהר — מבקרים רוצים לראות במהירות מה מוצע, להרגיש את האנרגיה של המקום, ולדעת איך ליצור קשר, בלי להתעמק בטקסטים.",
        solution:
          "מבנה ממוקד עסק שפותח בהירו חזק ופירוט שירותים ברור, ולאחריו גלריה וטופס יצירת קשר פעיל, כך שהאתר משמש ככלי לייצור לידים ולא רק כברושור סטטי.",
        designApproach:
          "תמונות בולטות ופריסה בעלת ניגודיות גבוהה משקפות את האנרגיה של מותג כושר, בעוד שהיררכיית תוכן ברורה שומרת על השירותים והקריאה לפעולה נגישים בכל מסך.",
        keyFeatures: [
          "סקשנים ייעודיים לאימון אישי, שיעורי קבוצה ותוכניות תזונה",
          "ניווט רספונסיבי ופריסה מונחית מובייל",
          "טופס יצירת קשר פעיל המחובר ל-API route של Next.js",
          "קריאות לפעולה ברורות לאורך העמוד",
        ],
        responsive:
          "נבנה בגישת מובייל-תחילה, כאשר הניווט, הגלריה והטפסים נבדקו כולם לעבודה תקינה בטלפונים וטאבלטים, לא רק בדסקטופ.",
      },
    },
  },
  {
    id: "photo-gallery",
    name: "Photography Portfolio",
    image: "photoGallery.jpg",
    industryLabel: "Photography Portfolio & Gallery Experience",
    description:
      "A responsive photography portfolio built around an image-first gallery grid, designed to let a photographer's work speak for itself on any device.",
    highlights: ["Responsive, image-first gallery grid", "Lazy-loaded images for fast browsing"],
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://photo-gallery11.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/Photo-Gallery",
    category: "Gallery",
    status: "Completed",
    featured: true,
    caseStudy: {
      purpose:
        "Built to put the images first — a responsive gallery experience for browsing a photographer's work without any visual noise getting in the way.",
      challenge:
        "Photography portfolios live or die by how the images are presented. The layout needed to showcase a full set of photos clearly on any screen size without feeling cluttered or forcing awkward crops.",
      solution:
        "A responsive image grid adapts its column count to the viewport, keeping every photo readable from large desktop screens down to a single column on mobile, with images lazy-loaded for fast browsing.",
      designApproach:
        "Minimal chrome, generous spacing between images, and a neutral background let the photography carry the visual hierarchy instead of decorative UI.",
      keyFeatures: [
        "Responsive, image-first gallery grid",
        "Lazy-loaded images for a fast initial load",
        "Clean, distraction-free browsing experience",
        "Simple photographer information and contact call-to-action",
      ],
      responsive:
        "The grid reflows from a multi-column layout on desktop to a single column on mobile, keeping images full-width and easy to view on any device.",
      screenshots: ["photoGallery.jpg", "personalGalleryjpg.jpg"],
    },
    he: {
      name: "תיק עבודות צילום",
      industryLabel: "תיק עבודות צילום וחוויית גלריה",
      description:
        "תיק עבודות צילום רספונסיבי הבנוי סביב רשת גלריה שמדגישה תמונות, כדי לתת לעבודה של הצלם לדבר בעד עצמה בכל מכשיר.",
      highlights: [
        "רשת גלריה רספונסיבית שמתמקדת בתמונות",
        "טעינה עצלה של תמונות לגלישה מהירה",
      ],
      category: "גלריה",
      caseStudy: {
        purpose:
          "נבנה כדי לשים את התמונות במרכז — חוויית גלריה רספונסיבית לעיון בעבודה של הצלם ללא כל רעש חזותי מפריע.",
        challenge:
          "תיקי עבודות של צלמים חיים או נופלים על פי האופן שבו התמונות מוצגות. הפריסה הייתה צריכה להציג סט מלא של תמונות בבירור בכל גודל מסך, בלי להיראות עמוסה או לכפות חיתוכים מוזרים.",
        solution:
          "רשת תמונות רספונסיבית מתאימה את מספר העמודות שלה לגודל המסך, ושומרת על כל תמונה קריאה - ממסכי דסקטופ גדולים ועד לעמודה אחת במובייל, כאשר התמונות נטענות בעצלתיים לגלישה מהירה.",
        designApproach:
          "מינימום ממשק, מרווחים נדיבים בין התמונות, ורקע ניטרלי, מאפשרים לצילום להוביל את ההיררכיה הוויזואלית במקום ממשק דקורטיבי.",
        keyFeatures: [
          "רשת גלריה רספונסיבית שמתמקדת בתמונות",
          "טעינה עצלה של תמונות לטעינה ראשונית מהירה",
          "חוויית גלישה נקייה וללא הסחות דעת",
          "מידע פשוט על הצלם וקריאה ליצירת קשר",
        ],
        responsive:
          "הרשת עוברת מפריסה מרובת עמודות בדסקטופ לעמודה אחת במובייל, ושומרת על התמונות ברוחב מלא ונוחות לצפייה בכל מכשיר.",
      },
    },
  },
  {
    id: "weather-app",
    name: "Weather App",
    image: "weatherApp.jpg",
    description:
      "A React weather app that displays current conditions for a given location in a clean, responsive layout.",
    highlights: ["Location-based lookup", "Clean data display", "Responsive layout"],
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://wheather-main-app.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/Weather-App",
    category: "Web Application",
    status: "Completed",
    featured: false,
    he: {
      name: "אפליקציית מזג אוויר",
      description:
        "אפליקציית מזג אוויר ב-React שמציגה את התנאים הנוכחיים במיקום נתון בפריסה נקייה ורספונסיבית.",
      highlights: ["חיפוש לפי מיקום", "הצגת נתונים נקייה", "פריסה רספונסיבית"],
      category: "אפליקציית ווב",
    },
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    image: "Bmi.jpg",
    description:
      "An interactive BMI calculator that takes height and weight input and instantly calculates and categorizes Body Mass Index.",
    highlights: ["Real-time calculation", "Input validation", "Result visualization"],
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://bmi-and-calculator.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/BMI-Calculator",
    category: "Dashboard / Web App",
    status: "Completed",
    featured: false,
    he: {
      name: "מחשבון BMI",
      description:
        "מחשבון BMI אינטראקטיבי שמקבל קלט של גובה ומשקל ומחשב ומסווג מיידית את מדד מסת הגוף.",
      highlights: ["חישוב בזמן אמת", "אימות קלט", "הצגה ויזואלית של התוצאה"],
      category: "דשבורד / אפליקציית ווב",
    },
  },
  {
    id: "edie-homepage",
    name: "Edie HomePage",
    image: "edieHomePage.jpg",
    description:
      "A responsive homepage layout built with React, focused on typography and section-based design.",
    highlights: ["Section-based layout", "Typography-driven design", "Responsive hero"],
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://edie-project.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/Edie-Homepage",
    category: "Landing Page",
    status: "Completed",
    featured: false,
    he: {
      name: "עמוד הבית - Edie",
      description:
        "פריסת עמוד בית רספונסיבית שנבנתה עם React, עם דגש על טיפוגרפיה ועיצוב מבוסס סקשנים.",
      highlights: ["פריסה מבוססת סקשנים", "עיצוב מונחה טיפוגרפיה", "הירו רספונסיבי"],
      category: "עמוד נחיתה",
    },
  },
  {
    id: "to-do-list",
    name: "To Do List",
    image: "toDoList.jpg",
    description:
      "A React to-do list app for adding, completing, and removing tasks, with all state managed on the client.",
    highlights: ["Task CRUD", "Client-side state", "Instant UI updates"],
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://to-do-list-main-app.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/to-do-list-app",
    category: "Utility App",
    status: "Completed",
    featured: false,
    he: {
      name: "רשימת מטלות",
      description:
        "אפליקציית רשימת מטלות ב-React להוספה, השלמה והסרה של משימות, כאשר כל הסטייט מנוהל בצד הלקוח.",
      highlights: ["ניהול משימות מלא (CRUD)", "סטייט בצד הלקוח", "עדכוני ממשק מיידיים"],
      category: "אפליקציית עזר",
    },
  },
  {
    id: "color-picker",
    name: "Color Picker",
    image: "colorPicker.jpg",
    description:
      "A modern color picker built with React that lets you enter a color by HEX, RGB, or name, preview it live, and copy the HEX/RGB values with one click.",
    highlights: [
      "HEX / RGB / color name input with validation",
      "One-click copy to clipboard",
      "Preset color swatches",
    ],
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://colors-pickerr.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/Color-Picker",
    category: "Utility App",
    status: "Completed",
    featured: false,
    he: {
      name: "בורר צבעים",
      description:
        "בורר צבעים מודרני שנבנה עם React, המאפשר להזין צבע לפי HEX, RGB או שם, לצפות בו בזמן אמת ולהעתיק את הערכים בלחיצה אחת.",
      highlights: [
        "קלט HEX / RGB / שם צבע עם אימות",
        "העתקה ללוח בלחיצה אחת",
        "דוגמיות צבע מוגדרות מראש",
      ],
      category: "אפליקציית עזר",
    },
  },
  {
    id: "lawyer-landing-page",
    name: "Lawyer Landing Page",
    image: "lawyer.jpg",
    description:
      "A marketing landing page for an employment law firm, built with Next.js and Tailwind CSS, presenting practice areas, attorney background, client process, and reviews with a consultation call-to-action.",
    highlights: [
      "Built with Next.js (App Router)",
      "Styled with Tailwind CSS",
      "Sections for practice areas, process & reviews",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://laywer-landing-page.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/Laywer---landing-page",
    category: "Business Website",
    status: "Completed",
    featured: false,
    he: {
      name: "עמוד נחיתה לעורך דין",
      description:
        "עמוד נחיתה שיווקי למשרד עורכי דין לדיני עבודה, שנבנה עם Next.js ו-Tailwind CSS, ומציג תחומי עיסוק, רקע מקצועי, תהליך עבודה מול לקוחות וביקורות, עם קריאה לפעולה לתיאום פגישת ייעוץ.",
      highlights: [
        "נבנה עם Next.js (App Router)",
        "עוצב עם Tailwind CSS",
        "סקשנים לתחומי עיסוק, תהליך עבודה וביקורות",
      ],
      category: "אתר עסקי",
    },
  },
  {
    id: "interior-design-studio",
    name: "Northline Studio",
    image: "stuido.jpg",
    industryLabel: "Architecture & Interior Design Website",
    description:
      "A portfolio site for a fictional architecture and interior design practice, built with Next.js, showcasing projects and studio philosophy with a clean, editorial layout and an interactive 3D walkthrough experience.",
    highlights: [
      "Built with Next.js (App Router)",
      "Editorial, image-driven layout",
      "Interactive 3D project walkthrough",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "React Three Fiber"],
    liveUrl: "https://interior-design-studio-project.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/Interior-Design-Studio",
    category: "Business Website",
    status: "Completed",
    featured: false,
    caseStudy: {
      purpose:
        "Built to give an architecture and interior design practice a premium, editorial digital presence where the projects themselves are the focus.",
      challenge:
        "Architecture and interior design studios sell a feeling as much as a service — a typical template-driven website undersells the work and makes every studio look the same. The site needed to feel considered and high-end without slowing down or confusing visitors.",
      solution:
        "A clean, image-led layout was built around large project photography, generous whitespace and restrained typography, so each project reads like a gallery piece rather than a portfolio thumbnail.",
      designApproach:
        "Editorial grid layouts, a muted neutral palette, and a consistent spacing rhythm across pages keep the focus on the architecture. Navigation stays minimal so nothing competes with the imagery.",
      keyFeatures: [
        "Responsive project showcase and individual project pages",
        "Studio and services pages with a consistent editorial layout",
        "Contact section for project inquiries",
        "An interactive 3D walkthrough experience built with React Three Fiber, letting visitors explore a project in 3D directly in the browser",
      ],
      responsive:
        "Layouts adapt from a multi-column gallery on desktop to a single-column, image-first flow on mobile, with the 3D experience tuned for touch interaction.",
      screenshots: ["stuido.jpg"],
    },
    he: {
      industryLabel: "אתר לאדריכלות ועיצוב פנים",
      description:
        "אתר תיק עבודות למשרד אדריכלות ועיצוב פנים בדיוני, שנבנה עם Next.js, ומציג פרויקטים ופילוסופיית סטודיו בפריסה נקייה בסגנון עיתונאי, יחד עם חוויית סיור תלת-ממדי אינטראקטיבית.",
      highlights: [
        "נבנה עם Next.js (App Router)",
        "פריסה עיתונאית מבוססת תמונות",
        "סיור תלת-ממדי אינטראקטיבי בפרויקט",
      ],
      category: "אתר עסקי",
      caseStudy: {
        purpose:
          "נבנה כדי לתת למשרד אדריכלות ועיצוב פנים נוכחות דיגיטלית פרימיום בסגנון עיתונאי, שבה הפרויקטים עצמם הם המוקד.",
        challenge:
          "סטודיואים לאדריכלות ועיצוב פנים מוכרים תחושה לא פחות משירות — אתר טיפוסי המבוסס על תבנית מוזיל את ערך העבודה וגורם לכל סטודיו להיראות אותו הדבר. האתר היה צריך להרגיש מחושב ויוקרתי, בלי להאט או לבלבל את המבקרים.",
        solution:
          "נבנתה פריסה נקייה ומובלת תמונות סביב צילומי פרויקטים גדולים, מרווח לבן נדיב וטיפוגרפיה מאופקת, כך שכל פרויקט נקרא כמו יצירת גלריה ולא כתמונה ממוזערת בתיק עבודות.",
        designApproach:
          "פריסות רשת בסגנון עיתונאי, פלטת צבעים ניטרלית ומעומעמת, וקצב מרווחים עקבי לאורך העמודים שומרים על המיקוד באדריכלות. הניווט נשאר מינימלי כך שדבר לא מתחרה עם התמונות.",
        keyFeatures: [
          "הצגת פרויקטים רספונסיבית ועמודי פרויקט נפרדים",
          "עמודי סטודיו ושירותים בפריסה עיתונאית עקבית",
          "סקשן יצירת קשר לפניות פרויקטים",
          "חוויית סיור תלת-ממדי אינטראקטיבית שנבנתה עם React Three Fiber, המאפשרת למבקרים לחקור פרויקט בתלת-ממד ישירות בדפדפן",
        ],
        responsive:
          "הפריסות מתאימות את עצמן מגלריה מרובת עמודות בדסקטופ לזרימה חד-עמודית מבוססת תמונות במובייל, כאשר חוויית התלת-ממד מותאמת לאינטראקציית מגע.",
      },
    },
  },
  {
    id: "george-dylan-tour-guide",
    name: "George Dylan – Tour Guide",
    image: "georgeDylan.jpg",
    description:
      "A one-page landing site for a Tel Aviv tour guide, built with WordPress and Elementor so the client can edit every text, photo and button on their own, with an illustrated hero, a captioned photo gallery and WhatsApp contact.",
    highlights: [
      "Built with WordPress & Elementor",
      "Fully editable by the client, no code",
      "Captioned gallery with lightbox",
    ],
    technologies: ["WordPress", "Elementor", "CSS"],
    liveUrl: "https://george-dylan.netlify.app/",
    category: "WordPress",
    status: "Completed",
    featured: false,
    he: {
      name: "ג׳ורג׳ דילן – מורה דרך",
      description:
        "אתר נחיתה בעמוד אחד למורה דרך מתל אביב, שנבנה עם WordPress ו-Elementor כך שהלקוח יכול לערוך בעצמו כל טקסט, תמונה וכפתור, עם הירו מאויר, גלריית תמונות עם כיתובים ויצירת קשר בוואטסאפ.",
      highlights: [
        "נבנה עם WordPress ו-Elementor",
        "ניתן לעריכה מלאה על ידי הלקוח, בלי קוד",
        "גלריה עם כיתובים ולייטבוקס",
      ],
      category: "וורדפרס",
    },
  },
  {
    id: "arava-botanics",
    name: "Arava Botanics",
    image: "aravaBotanics.jpg",
    industryLabel: "Skincare E-Commerce Store",
    description:
      "An online store for a natural skincare brand built on Dead Sea minerals, olive oil and desert plants, built with WordPress, WooCommerce and Elementor, with product categories, product pages, cart and checkout. The live demo is a static showcase of the store.",
    highlights: [
      "Built with WordPress, WooCommerce & Elementor",
      "Product catalog with categories & product pages",
      "Client manages products & orders with no code",
    ],
    technologies: ["WordPress", "WooCommerce", "Elementor", "CSS"],
    liveUrl: "https://arava-botanics.netlify.app/",
    category: "WordPress · WooCommerce",
    status: "Completed",
    featured: false,
    he: {
      industryLabel: "חנות אונליין למוצרי טיפוח",
      description:
        "חנות אונליין למותג טיפוח טבעי המבוסס על מינרלים מים המלח, שמן זית וצמחי מדבר, שנבנתה עם WordPress, WooCommerce ו-Elementor, עם קטגוריות מוצרים, עמודי מוצר, עגלה ותשלום. הדמו החי הוא תצוגה סטטית של החנות.",
      highlights: [
        "נבנה עם WordPress, WooCommerce ו-Elementor",
        "קטלוג מוצרים עם קטגוריות ועמודי מוצר",
        "הלקוח מנהל מוצרים והזמנות בעצמו, בלי קוד",
      ],
      category: "וורדפרס · WooCommerce",
    },
  },
  {
    id: "recipe-page",
    name: "Recipe Page",
    image: "recipePage.jpg",
    description:
      "A responsive recipe page presenting ingredients and instructions in a clean, readable layout.",
    highlights: ["Content-focused layout", "Readable typography"],
    technologies: ["HTML", "CSS"],
    liveUrl: "https://recipe-and-cheff.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/Recipe-page",
    category: "Content Page",
    status: "Completed",
    featured: false,
    he: {
      name: "עמוד מתכונים",
      description:
        "עמוד מתכונים רספונסיבי שמציג רכיבים והוראות הכנה בפריסה נקייה וקריאה.",
      highlights: ["פריסה ממוקדת תוכן", "טיפוגרפיה קריאה"],
      category: "עמוד תוכן",
    },
  },
];

export const selectedWorkIds = [
  "interior-design-studio",
  "photo-gallery",
  "fitcenter",
  "shoply",
];

export function localizeProject(project, language) {
  if (language !== "he" || !project.he) return project;

  const { he, ...rest } = project;
  const merged = { ...rest, ...he };

  if (project.caseStudy) {
    merged.caseStudy = {
      ...project.caseStudy,
      ...(he.caseStudy || {}),
    };
  }

  return merged;
}

export default projects;
