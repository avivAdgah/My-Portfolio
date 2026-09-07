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
  },
];

export const selectedWorkIds = [
  "interior-design-studio",
  "photo-gallery",
  "fitcenter",
  "shoply",
];

export default projects;
