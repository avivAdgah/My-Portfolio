import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { getChefBySlug } from '../data/chefs'
import { getCategoryBySlug } from '../data/categories'
import { formatMinutes, totalTime } from '../utils/time'
import './RecipeCard.css'

export default function RecipeCard({ recipe }) {
  const chef = getChefBySlug(recipe.chefSlug)
  const category = getCategoryBySlug(recipe.category)

  return (
    <Link to={`/recipes/${recipe.slug}`} className="recipe-card">
      <div className="recipe-card-image">
        <img src={recipe.image} alt={recipe.name} loading="lazy" />
        {category && <span className="recipe-card-tag">{category.name}</span>}
      </div>
      <div className="recipe-card-body">
        <h3 className="recipe-card-title">{recipe.name}</h3>
        {chef && <p className="recipe-card-chef">by {chef.name}</p>}
        <div className="recipe-card-meta">
          <span>
            <Clock size={14} aria-hidden="true" /> {formatMinutes(totalTime(recipe))}
          </span>
        </div>
      </div>
    </Link>
  )
}
