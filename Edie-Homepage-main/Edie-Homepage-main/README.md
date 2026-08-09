<h1 align="center">Edie</h1>

<p align="center">Marketing site for Edie, a web design & development studio.</p>

## Overview

A single-page marketing site built with React, Vite, and Tailwind CSS. The
page is split into componentized sections — Navbar, Hero, Services,
Projects, Team, Testimonial, and Footer — with a small shared design system
(colors, type scale, spacing, radii, buttons) defined in
[src/index.css](src/index.css).

### Built with

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons

### Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

### Project structure

```
src/
  assets/images/   # project & team photography
  components/      # one component per section
  data/            # copy and content used by components
  App.jsx
  index.css        # Tailwind + design tokens
  main.jsx
```
