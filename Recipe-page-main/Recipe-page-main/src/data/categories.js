export const categories = [
  { slug: 'desserts', name: 'Desserts' },
  { slug: 'pasta', name: 'Pasta' },
  { slug: 'breakfast', name: 'Breakfast' },
  { slug: 'baking', name: 'Baking' },
  { slug: 'vegan', name: 'Vegan' },
]

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug)
}
