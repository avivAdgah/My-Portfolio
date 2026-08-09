import cheesecakeImg from '../assets/cheesecake.png'

// qty is a number used for servings scaling; set to null for items that
// shouldn't scale (e.g. "salt to taste"). metric (grams) scales alongside qty.
export const recipes = [
  {
    slug: 'classic-cheesecake',
    name: 'Classic New York Cheesecake',
    category: 'desserts',
    chefSlug: 'grace-miller',
    image: cheesecakeImg,
    description:
      'A dense, silky-smooth cheesecake with a buttery graham cracker crust. Baked low and slow in a water bath, then chilled overnight for the cleanest slice you\'ll ever cut.',
    yields: { amount: 12, unit: 'slices' },
    prepTime: 45,
    cookTime: 60,
    restTime: 465,
    difficulty: 'Intermediate',
    featured: true,
    popularity: 98,
    publishedAt: '2024-11-02',
    ingredients: [
      {
        section: 'Graham Cracker Crust',
        items: [
          { qty: 1.5, unit: 'cups', metric: '150g', name: 'graham cracker crumbs (about 10 full sheet graham crackers)' },
          { qty: 5, unit: 'tbsp', metric: '70g', name: 'unsalted butter, melted' },
          { qty: 0.25, unit: 'cup', metric: '50g', name: 'granulated sugar' },
        ],
      },
      {
        section: 'Cheesecake Filling',
        items: [
          { qty: 32, unit: 'oz', metric: '940g', name: 'full-fat cream cheese, softened to room temperature (four 8-oz blocks)' },
          { qty: 1, unit: 'cup', metric: '200g', name: 'granulated sugar' },
          { qty: 1, unit: 'cup', metric: '240g', name: 'full-fat sour cream, at room temperature' },
          { qty: 1, unit: 'tsp', metric: null, name: 'pure vanilla extract' },
          { qty: 2, unit: 'tsp', metric: null, name: 'fresh lemon juice (optional, but recommended)' },
          { qty: 3, unit: 'large', metric: null, name: 'eggs, at room temperature' },
        ],
      },
      {
        section: 'Topping (optional)',
        items: [
          { qty: null, unit: '', name: 'salted caramel, lemon curd, strawberry topping, chocolate ganache, fresh fruit, or whipped cream' },
        ],
      },
    ],
    instructions: [
      { text: 'Preheat the oven to 325°F (163°C). Grease a 9-inch springform pan and wrap the outside tightly in two layers of foil for the water bath.' },
      { text: 'Mix the graham cracker crumbs, melted butter, and sugar until it resembles wet sand. Press firmly into the bottom of the pan and about 1 inch up the sides. Bake for 8 minutes, then let cool while you make the filling.' },
      { text: 'Beat the cream cheese on medium speed until completely smooth, 2–3 minutes. Scrape down the bowl — no lumps should remain.' },
      { text: 'Add the sugar and beat until combined. Mix in the sour cream, vanilla, and lemon juice on low speed.' },
      { text: 'Add the eggs one at a time, mixing on low speed just until each is incorporated. Overbeating adds air that causes cracks, so stop as soon as the batter is smooth.' },
      { text: 'Pour the batter over the crust. Place the wrapped pan in a large roasting pan and add hot water until it reaches halfway up the sides of the springform pan.' },
      { text: 'Bake for 55–65 minutes, until the edges are set but the center still jiggles slightly. Turn off the oven, crack the door, and let the cheesecake cool inside for 1 hour.' },
      { text: 'Remove from the water bath, run a knife around the edge to loosen it, and refrigerate uncovered for at least 6 hours, ideally overnight, before slicing.' },
    ],
  },
  {
    slug: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    category: 'pasta',
    chefSlug: 'marco-rossi',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=1400&h=900&fit=crop&q=80',
    description:
      'A true Roman carbonara has no cream — just eggs, cured pork, pecorino, and a generous crack of black pepper, brought together with starchy pasta water.',
    yields: { amount: 4, unit: 'servings' },
    prepTime: 10,
    cookTime: 20,
    restTime: 0,
    difficulty: 'Easy',
    popularity: 91,
    publishedAt: '2025-01-10',
    ingredients: [
      {
        items: [
          { qty: 400, unit: 'g', metric: null, name: 'spaghetti' },
          { qty: 150, unit: 'g', metric: null, name: 'guanciale or pancetta, cut into small strips' },
          { qty: 4, unit: 'large', metric: null, name: 'egg yolks, plus 1 whole egg' },
          { qty: 1, unit: 'cup', metric: '100g', name: 'pecorino romano, finely grated, plus more to serve' },
          { qty: 1, unit: 'tsp', metric: null, name: 'coarsely ground black pepper' },
          { qty: null, unit: '', name: 'fine sea salt, for the pasta water' },
        ],
      },
    ],
    instructions: [
      { text: 'Bring a large pot of well-salted water to a boil and cook the spaghetti until just shy of al dente.' },
      { text: 'While the pasta cooks, render the guanciale in a wide skillet over medium heat until crisp, about 6–8 minutes. Turn off the heat.' },
      { text: 'Whisk the egg yolks, whole egg, pecorino, and black pepper together in a bowl until you have a thick paste.' },
      { text: 'Just before the pasta is done, scoop out about 1 cup of pasta water. Transfer the drained pasta into the skillet with the guanciale and toss to coat in the rendered fat.' },
      { text: 'Remove the skillet from any heat entirely. Pour in the egg mixture, tossing constantly and adding splashes of pasta water until the sauce turns glossy and coats the noodles — the residual heat cooks the eggs into a sauce, not scrambled eggs.' },
      { text: 'Plate immediately with extra pecorino and black pepper on top.' },
    ],
  },
  {
    slug: 'avocado-toast',
    name: 'Avocado Toast with Poached Egg',
    category: 'breakfast',
    chefSlug: 'elena-torres',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1400&h=900&fit=crop&q=80',
    description:
      'Thick sourdough, smashed avocado with lime and chili flakes, and a perfectly poached egg. A weekend breakfast that comes together in fifteen minutes.',
    yields: { amount: 2, unit: 'servings' },
    prepTime: 10,
    cookTime: 5,
    restTime: 0,
    difficulty: 'Easy',
    popularity: 76,
    publishedAt: '2026-07-20',
    ingredients: [
      {
        items: [
          { qty: 2, unit: 'thick slices', metric: null, name: 'sourdough bread' },
          { qty: 1, unit: 'large', metric: null, name: 'ripe avocado' },
          { qty: 1, unit: 'tbsp', metric: null, name: 'fresh lime juice' },
          { qty: 2, unit: 'large', metric: null, name: 'eggs' },
          { qty: 1, unit: 'tbsp', metric: null, name: 'white vinegar (for poaching water)' },
          { qty: 0.5, unit: 'tsp', metric: null, name: 'chili flakes' },
          { qty: null, unit: '', name: 'flaky sea salt and cracked black pepper, to taste' },
        ],
      },
    ],
    instructions: [
      { text: 'Toast the sourdough slices until deeply golden and crisp.' },
      { text: 'Mash the avocado with the lime juice, a pinch of salt, and pepper. Keep it a little chunky.' },
      { text: 'Bring a small pot of water to a bare simmer and add the vinegar. Crack each egg into a small cup, swirl the water gently, and slide the eggs in one at a time. Poach for 3 minutes for a runny yolk.' },
      { text: 'Spread the mashed avocado thickly over the toast, top each slice with a poached egg, and finish with chili flakes, flaky salt, and black pepper.' },
    ],
  },
  {
    slug: 'brown-butter-chocolate-chip-cookies',
    name: 'Brown Butter Chocolate Chip Cookies',
    category: 'baking',
    chefSlug: 'james-cole',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1400&h=900&fit=crop&q=80',
    description:
      'Nutty brown butter and a mix of dark and milk chocolate give these cookies a deeper flavor than the classic recipe, with crisp edges and a chewy center.',
    yields: { amount: 24, unit: 'cookies' },
    prepTime: 20,
    cookTime: 12,
    restTime: 30,
    difficulty: 'Easy',
    popularity: 88,
    publishedAt: '2026-07-28',
    ingredients: [
      {
        items: [
          { qty: 1, unit: 'cup', metric: '227g', name: 'unsalted butter' },
          { qty: 1, unit: 'cup', metric: '200g', name: 'packed brown sugar' },
          { qty: 0.5, unit: 'cup', metric: '100g', name: 'granulated sugar' },
          { qty: 2, unit: 'large', metric: null, name: 'eggs' },
          { qty: 1, unit: 'tsp', metric: null, name: 'pure vanilla extract' },
          { qty: 2.5, unit: 'cups', metric: '315g', name: 'all-purpose flour' },
          { qty: 1, unit: 'tsp', metric: null, name: 'baking soda' },
          { qty: 1, unit: 'tsp', metric: null, name: 'fine sea salt' },
          { qty: 1.5, unit: 'cups', metric: '260g', name: 'chopped dark and milk chocolate' },
        ],
      },
    ],
    instructions: [
      { text: 'Melt the butter in a light-colored saucepan over medium heat, swirling often, until it foams and turns amber with a nutty smell, about 5 minutes. Pour into a bowl to cool slightly.' },
      { text: 'Whisk the brown butter with both sugars until glossy. Whisk in the eggs and vanilla.' },
      { text: 'Fold in the flour, baking soda, and salt just until no dry streaks remain, then fold in the chopped chocolate.' },
      { text: 'Cover and chill the dough for at least 30 minutes — this keeps the cookies from spreading too thin.' },
      { text: 'Preheat the oven to 350°F (175°C). Scoop 2-tablespoon balls of dough onto a lined baking sheet, spaced 2 inches apart.' },
      { text: 'Bake for 10–12 minutes, until the edges are set but the centers still look slightly underdone. Cool on the sheet for 5 minutes before transferring to a rack.' },
    ],
  },
  {
    slug: 'roasted-veggie-buddha-bowl',
    name: 'Roasted Vegetable Buddha Bowl',
    category: 'vegan',
    chefSlug: 'priya-nair',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1400&h=900&fit=crop&q=80',
    description:
      'Crisp roasted vegetables, herbed quinoa, and a creamy tahini dressing come together in one bowl that is as filling as it is colorful.',
    yields: { amount: 2, unit: 'servings' },
    prepTime: 15,
    cookTime: 30,
    restTime: 0,
    difficulty: 'Easy',
    popularity: 82,
    publishedAt: '2026-08-01',
    ingredients: [
      {
        section: 'Bowl',
        items: [
          { qty: 1, unit: 'cup', metric: '185g', name: 'quinoa, rinsed' },
          { qty: 1, unit: 'medium', metric: null, name: 'sweet potato, cubed' },
          { qty: 1, unit: 'cup', metric: null, name: 'chickpeas, drained and patted dry' },
          { qty: 2, unit: 'cups', metric: null, name: 'broccoli florets' },
          { qty: 2, unit: 'tbsp', metric: null, name: 'olive oil' },
          { qty: 1, unit: 'tsp', metric: null, name: 'smoked paprika' },
        ],
      },
      {
        section: 'Tahini Dressing',
        items: [
          { qty: 3, unit: 'tbsp', metric: null, name: 'tahini' },
          { qty: 1, unit: 'tbsp', metric: null, name: 'lemon juice' },
          { qty: 1, unit: 'tsp', metric: null, name: 'maple syrup' },
          { qty: null, unit: '', name: 'warm water, to thin' },
        ],
      },
    ],
    instructions: [
      { text: 'Preheat the oven to 425°F (220°C). Toss the sweet potato, chickpeas, and broccoli with olive oil and smoked paprika, and spread on a sheet pan.' },
      { text: 'Roast for 25–30 minutes, tossing halfway, until the vegetables are caramelized and the chickpeas are crisp.' },
      { text: 'Meanwhile, cook the quinoa according to package instructions and fluff with a fork.' },
      { text: 'Whisk the tahini, lemon juice, and maple syrup together, adding warm water a tablespoon at a time until pourable.' },
      { text: 'Divide the quinoa between bowls, top with the roasted vegetables, and drizzle generously with tahini dressing.' },
    ],
  },
]

export function getRecipeBySlug(slug) {
  return recipes.find((recipe) => recipe.slug === slug)
}

export function getRecipesByChef(chefSlug, excludeSlug) {
  return recipes.filter((recipe) => recipe.chefSlug === chefSlug && recipe.slug !== excludeSlug)
}

export function getRecipesByCategory(categorySlug, excludeSlug) {
  return recipes.filter((recipe) => recipe.category === categorySlug && recipe.slug !== excludeSlug)
}

export function getRelatedRecipes(recipe, limit = 3) {
  const sameChef = getRecipesByChef(recipe.chefSlug, recipe.slug)
  const sameCategory = getRecipesByCategory(recipe.category, recipe.slug).filter(
    (r) => !sameChef.includes(r),
  )
  return [...sameChef, ...sameCategory].slice(0, limit)
}

export function getPopularRecipes(limit = 4) {
  return [...recipes].sort((a, b) => b.popularity - a.popularity).slice(0, limit)
}

export function getNewRecipes(limit = 3) {
  return [...recipes]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit)
}

export function getFeaturedRecipe() {
  return recipes.find((recipe) => recipe.featured) ?? recipes[0]
}
