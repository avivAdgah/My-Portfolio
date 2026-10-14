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
    id: "nordwalk-3d-store",
    name: "NORDWALK – 3D Furniture Showroom",
    image: "nordwalk.jpg",
    industryLabel: "Furniture E-Commerce in 3D",
    description:
      "An online furniture store you shop on foot: visitors walk a 3D showroom like a real store, step up to any product, recolour it live and add it to the cart, all in the browser.",
    highlights: [
      "Walk a 3D showroom with scroll, keys or touch",
      "Live colour variants on the 3D models",
      "Cart, checkout and shareable product links",
    ],
    technologies: ["React", "Vite", "Three.js", "React Three Fiber", "Zustand"],
    liveUrl: "https://nordwalk-3d-store.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/nordwalk-3d-store",
    category: "E-commerce",
    status: "Completed",
    featured: true,
    caseStudy: {
      purpose:
        "Built to show how an online store can feel like a visit to the shop: customers walk through furnished rooms and pick products from the room they see, instead of scrolling a grid of thumbnails.",
      challenge:
        "3D product viewers are usually a single item on a turntable, and free-roaming 3D scenes confuse shoppers who just want to browse. The store needed to feel like walking a real showroom while staying as easy to use as a normal shop on any device.",
      solution:
        "The showroom is a one-way route, like a furniture store: scrolling, the arrow keys or a swipe walk you along it, and dragging looks around. Clicking a product or its price tag walks you up to it and opens a panel where colour choices recolour the 3D model live. The cart and checkout sit on top of the scene, and every department and product has its own shareable link.",
      designApproach:
        "A calm Scandinavian palette of oak, linen and sage, yellow floor arrows and hanging department signs borrowed from real stores, and a small map so visitors always know where they are.",
      keyFeatures: [
        "Walkable 3D showroom with five departments and a minimap",
        "Product close-ups with live colour variants on the 3D model",
        "Cart, quantity controls and a checkout flow",
        "Shareable links that open a department or a product directly",
      ],
      responsive:
        "On phones a vertical swipe walks and a sideways swipe looks around, the product panel becomes a bottom sheet, and the camera steps further back so the product stays in view.",
      screenshots: ["nordwalk.jpg", "nordwalkProduct.jpg"],
    },
    he: {
      name: "NORDWALK – אולם תצוגה לרהיטים בתלת-ממד",
      industryLabel: "חנות רהיטים אונליין בתלת-ממד",
      description:
        "חנות רהיטים אונליין שקונים בה ברגל: המבקרים מטיילים באולם תצוגה תלת-ממדי כמו בחנות אמיתית, ניגשים לכל מוצר, משנים לו צבע בזמן אמת ומוסיפים לעגלה, הכל בדפדפן.",
      highlights: [
        "הליכה באולם תצוגה תלת-ממדי בגלילה, במקשים או במגע",
        "החלפת צבעים חיה על המודלים בתלת-ממד",
        "עגלה, תשלום וקישורים לשיתוף מוצרים",
      ],
      category: "מסחר אלקטרוני",
      caseStudy: {
        purpose:
          "נבנה כדי להראות איך חנות אונליין יכולה להרגיש כמו ביקור בחנות: הלקוחות מטיילים בין חדרים מעוצבים ובוחרים מוצרים מתוך החדר שהם רואים, במקום לגלול רשת של תמונות ממוזערות.",
        challenge:
          "תצוגות מוצר בתלת-ממד הן בדרך כלל פריט אחד שמסתובב על מעמד, וסצנות תלת-ממד חופשיות מבלבלות קונים שרק רוצים לעיין. החנות הייתה צריכה להרגיש כמו הליכה באולם תצוגה אמיתי ולהישאר פשוטה כמו חנות רגילה בכל מכשיר.",
        solution:
          "אולם התצוגה הוא מסלול חד-כיווני, כמו בחנות רהיטים: גלילה, מקשי החיצים או החלקה מקדמים אותך לאורכו, וגרירה מסובבת את המבט. לחיצה על מוצר או על תג המחיר שלו מקרבת אותך אליו ופותחת פאנל שבו בחירת צבע צובעת את המודל בזמן אמת. העגלה והתשלום יושבים מעל הסצנה, ולכל מחלקה ומוצר יש קישור משלו לשיתוף.",
        designApproach:
          "פלטה סקנדינבית רגועה של אלון, פשתן ומרווה, חיצים צהובים על הרצפה ושלטי מחלקות תלויים בהשראת חנויות אמיתיות, ומפה קטנה כדי שהמבקרים תמיד יידעו איפה הם נמצאים.",
        keyFeatures: [
          "אולם תצוגה תלת-ממדי עם חמש מחלקות ומפה",
          "תצוגת מוצר מקרוב עם החלפת צבעים חיה על המודל",
          "עגלה, שליטה בכמויות ותהליך תשלום",
          "קישורים לשיתוף שפותחים ישירות מחלקה או מוצר",
        ],
        responsive:
          "בטלפון החלקה אנכית מקדמת והחלקה הצידה מסובבת את המבט, פאנל המוצר הופך למגירה תחתונה, והמצלמה נסוגה מעט כדי שהמוצר יישאר בתמונה.",
      },
    },
  },
  {
    id: "sunyi-bali-resort",
    name: "SUNYI – Bali Jungle Retreat",
    image: "sunyiResort.jpg",
    industryLabel: "Boutique Resort & Booking Experience",
    description:
      "A booking site for a fictional Bali jungle resort where visitors walk the grounds in real photographs and step inside the villas in 3D. Each room photo is raised into depth with an AI depth map, so you can look around and walk from the bedroom to the shower to the pool, then book.",
    highlights: [
      "Walk the resort in real photos",
      "Villa rooms in 3D from AI depth maps",
      "Booking.com-style villa list & booking flow",
    ],
    technologies: ["React", "Vite", "Three.js", "React Three Fiber", "Zustand"],
    liveUrl: "https://sunyi-bali-resort.netlify.app/",
    githubUrl: "https://github.com/avivAdgah/sunyi-bali-resort",
    category: "Hospitality",
    status: "Completed",
    featured: true,
    caseStudy: {
      purpose:
        "Built to show how a hotel site can sell the feeling of a place, not just list rooms: guests walk through the resort and into a villa before they book it.",
      challenge:
        "Real photos look real but are flat, and 3D scenes move but look artificial. The goal was a tour that felt like walking through actual rooms while staying photographic, with no 360° cameras or 3D modelling.",
      solution:
        "The resort is a path of full-screen photos, one per facility, joined by a walking transition. Inside a villa every room photo gets a depth map from an AI model (Depth Anything V2) and is rendered as a 3D surface in WebGL, so moving the camera gives real parallax: drag to look around, walk in, and keep walking through the doorway into the next room.",
      designApproach:
        "Photography leads, and the interface stays quiet: a serif-and-sand palette inspired by Balinese materials, a slim path bar for orientation, and a familiar Booking.com-style villa list with ratings, perks and nightly prices.",
      keyFeatures: [
        "Resort walk through eight facilities in real photos, with a walk-in transition between places",
        "Villa rooms in 3D from AI depth maps: look around, walk in, go through doorways",
        "Villa list with ratings, filters, sorting and nightly prices",
        "Booking form with dates, guests, extras and a live price breakdown",
      ],
      responsive:
        "The villa list docks beside the view on desktop and slides in as a drawer on phones, and the room view works with touch: drag to look around, hold to walk.",
      screenshots: ["sunyiResort.jpg", "sunyiRoom.jpg"],
    },
    he: {
      name: "SUNYI – ריזורט בג׳ונגל של באלי",
      industryLabel: "ריזורט בוטיק וחוויית הזמנה",
      description:
        "אתר הזמנות לריזורט בדיוני בג׳ונגל של באלי, שבו המבקרים מטיילים בשטח בתמונות אמיתיות ונכנסים לווילות בתלת-ממד. כל תמונת חדר הופכת לתלת-ממד בעזרת מפת עומק שנוצרה ב-AI, כך שאפשר להסתכל מסביב וללכת מחדר השינה למקלחת ולבריכה, ואז להזמין.",
      highlights: [
        "טיול בריזורט בתמונות אמיתיות",
        "חדרי הווילות בתלת-ממד ממפות עומק של AI",
        "רשימת וילות בסגנון Booking ותהליך הזמנה",
      ],
      category: "אירוח",
      caseStudy: {
        purpose:
          "נבנה כדי להראות איך אתר של מלון יכול למכור את התחושה של המקום ולא רק לפרט חדרים: האורחים מטיילים בריזורט ונכנסים לווילה לפני שהם מזמינים אותה.",
        challenge:
          "תמונות אמיתיות נראות אמיתיות אבל הן שטוחות, וסצנות תלת-ממד זזות אבל נראות מלאכותיות. המטרה הייתה סיור שמרגיש כמו הליכה בחדרים אמיתיים ונשאר צילומי, בלי מצלמות 360° ובלי מידול תלת-ממד.",
        solution:
          "הריזורט הוא שביל של תמונות במסך מלא, תמונה לכל מתקן, עם מעבר של הליכה ביניהן. בתוך הווילה כל תמונת חדר מקבלת מפת עומק ממודל AI (Depth Anything V2) ומוצגת כמשטח תלת-ממדי ב-WebGL, כך שתזוזת המצלמה יוצרת עומק אמיתי: גוררים כדי להסתכל מסביב, נכנסים פנימה, וממשיכים ללכת דרך הפתח לחדר הבא.",
        designApproach:
          "הצילום מוביל והממשק נשאר שקט: גופן סריף וגווני חול בהשראת חומרים באליניים, פס שביל דק להתמצאות, ורשימת וילות מוכרת בסגנון Booking עם דירוגים, הטבות ומחיר ללילה.",
        keyFeatures: [
          "טיול בשמונה מתקני הריזורט בתמונות אמיתיות, עם מעבר של הליכה בין המקומות",
          "חדרי הווילות בתלת-ממד ממפות עומק של AI: מסתכלים מסביב, נכנסים ועוברים בין החדרים",
          "רשימת וילות עם דירוגים, סינון, מיון ומחיר ללילה",
          "טופס הזמנה עם תאריכים, אורחים, תוספות ופירוט מחיר חי",
        ],
        responsive:
          "רשימת הווילות מוצמדת לצד התצוגה בדסקטופ ונפתחת כמגירה בטלפון, ותצוגת החדר עובדת במגע: גוררים כדי להסתכל מסביב ומחזיקים כדי ללכת.",
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
    id: "vintage-store",
    name: "Vintage STORE",
    image: "vintageStore.jpg",
    industryLabel: "Second-Hand Vintage Store",
    description:
      "An online store for one-of-a-kind vintage home and decor pieces, built with WordPress, WooCommerce and Elementor. Every item has a single unit in stock, sold pieces get a SOLD stamp, and shoppers can browse by era and condition. The live demo is a static showcase of the store.",
    highlights: [
      "Built with WordPress, WooCommerce & Elementor",
      "One-of-a-kind stock with SOLD states",
      "Browse by era & condition",
    ],
    technologies: ["WordPress", "WooCommerce", "Elementor", "CSS"],
    liveUrl: "https://vintage-thestore.netlify.app/",
    category: "WordPress · WooCommerce",
    status: "Completed",
    featured: false,
    he: {
      industryLabel: "חנות וינטג׳ יד שנייה",
      description:
        "חנות אונליין לפריטי בית ועיצוב וינטג׳ ייחודיים, שנבנתה עם WordPress, WooCommerce ו-Elementor. לכל פריט יש יחידה אחת במלאי, פריטים שנמכרו מקבלים חותמת SOLD, ואפשר לסנן לפי עשור ולפי מצב הפריט. הדמו החי הוא תצוגה סטטית של החנות.",
      highlights: [
        "נבנה עם WordPress, WooCommerce ו-Elementor",
        "פריטים ייחודיים במלאי יחיד, עם סימון SOLD",
        "סינון לפי עשור ולפי מצב",
      ],
      category: "וורדפרס · WooCommerce",
    },
  },
  {
    id: "momentum-consulting",
    name: "Momentum – Business Consultant",
    image: "momentum.jpg",
    industryLabel: "Business Consultant Brand Site",
    description:
      "A colorful one-page brand site for a business consultant, built with WordPress and Elementor. Motivational quotes run through the whole page, and visitors can book a free strategy call through a built-in calendar: pick a day, pick a time, add details and get a confirmation.",
    highlights: [
      "Built with WordPress & Elementor",
      "Built-in booking calendar for a free call",
      "Motivational quotes throughout the page",
    ],
    technologies: ["WordPress", "Elementor", "JavaScript", "CSS"],
    liveUrl: "https://momentum-counselor.netlify.app/",
    category: "WordPress",
    status: "Completed",
    featured: false,
    he: {
      name: "Momentum – יועצת עסקית",
      industryLabel: "אתר תדמית ליועצת עסקית",
      description:
        "אתר תדמית צבעוני בעמוד אחד ליועצת עסקית, שנבנה עם WordPress ו-Elementor. משפטי מוטיבציה מלווים את כל הדף, והמבקרים יכולים לקבוע שיחת ייעוץ חינמית ביומן מובנה: בוחרים יום ושעה, ממלאים פרטים ומקבלים אישור.",
      highlights: [
        "נבנה עם WordPress ו-Elementor",
        "יומן מובנה לקביעת שיחת ייעוץ חינמית",
        "משפטי מוטיבציה לאורך כל הדף",
      ],
      category: "וורדפרס",
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
  "nordwalk-3d-store",
  "sunyi-bali-resort",
  "interior-design-studio",
  "arava-botanics",
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
