import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { recipes } from '../data/recipes'
import { getChefBySlug } from '../data/chefs'
import { useSEO } from '../hooks/useSEO'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import RecipeCard from '../components/RecipeCard'
import './RecipesList.css'

export default function RecipesList() {
  useSEO('Recipes', 'Search and filter every recipe in the cookbook by category, chef, or ingredient.')

  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') ?? ''
  const [query, setQuery] = useState('')

  function setCategory(next) {
    if (next) {
      setSearchParams({ category: next })
    } else {
      setSearchParams({})
    }
  }

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return recipes.filter((recipe) => {
      if (category && recipe.category !== category) return false
      if (!normalizedQuery) return true

      const chef = getChefBySlug(recipe.chefSlug)
      const haystack = [
        recipe.name,
        chef?.name,
        ...recipe.ingredients.flatMap((section) => section.items.map((item) => item.name)),
      ]
        .join(' ')
        .toLowerCase()

      return haystack.includes(normalizedQuery)
    })
  }, [query, category])

  return (
    <div className="container recipes-list">
      <header className="recipes-list-header">
        <p className="eyebrow">The Full Collection</p>
        <h1>All Recipes</h1>
      </header>

      <div className="recipes-list-controls">
        <SearchBar value={query} onChange={setQuery} />
        <CategoryFilter value={category} onChange={setCategory} />
      </div>

      {filtered.length > 0 ? (
        <div className="recipe-grid">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="recipes-empty">No recipes match your search. Try a different word or category.</p>
      )}
    </div>
  )
}
