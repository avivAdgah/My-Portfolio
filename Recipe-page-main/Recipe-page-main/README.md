<h1 align="center">The Kitchen Table</h1>

<p align="center">A digital cookbook — recipes from chefs around the world, built with React and Vite.</p>

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)

## Overview

Browse, search, and filter recipes by category, chef, or ingredient. Every recipe has its own page
with a servings scaler that recalculates ingredient quantities, and every chef has a profile page
listing everything they've published.

### Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [lucide-react](https://lucide.dev/) for icons

### Getting Started

```bash
npm install
npm run dev
```

### Project Structure

```
src/
  components/   shared UI: Navbar, Footer, RecipeCard, ChefCard, Ingredients, Instructions...
  pages/        route-level views: Home, RecipesList, RecipePage, ChefsList, ChefPage, About
  data/         recipes.js, chefs.js, categories.js — the recipe "database"
  hooks/        useSEO — sets per-page title/meta description
  utils/        servings scaling and time formatting helpers
```
