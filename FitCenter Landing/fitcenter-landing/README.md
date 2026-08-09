# FitCenter

Marketing landing page for **FitCenter**, a gym in Tel Aviv offering personal training, group classes, nutrition plans, yoga, cardio, and CrossFit.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [react-icons](https://react-icons.github.io/react-icons/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.js   # Contact form submission handler
│   ├── layout.js              # Root layout, metadata, structured data
│   ├── page.js                # Composes all landing page sections
│   ├── robots.js               # robots.txt
│   └── sitemap.js              # sitemap.xml
└── components/
    ├── layout/                # Navbar, Footer
    ├── sections/               # Hero, About, Services, WhyChooseUs, Gallery, ContactUs
    └── ui/                     # Reusable Card, FeatureCard
```

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Notes

- The contact form (`src/app/api/contact/route.js`) currently logs submissions server-side. Connect a real email provider (e.g. Resend, SendGrid) via environment variables before going live.
- Business details (address, phone, email, social links) in `Footer.jsx` and `ContactUs.jsx` are placeholders — update them with real FitCenter information before launch.
- Update `siteUrl` in `src/app/layout.js`, `robots.js`, and `sitemap.js` to the real production domain.
