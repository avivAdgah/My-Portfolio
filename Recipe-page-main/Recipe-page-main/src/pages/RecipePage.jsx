import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getRecipeBySlug, getRelatedRecipes } from '../data/recipes'
import { getChefBySlug } from '../data/chefs'
import { getCategoryBySlug } from '../data/categories'
import { useSEO } from '../hooks/useSEO'
import RecipeStats from '../components/RecipeStats'
import ServingsAdjuster from '../components/ServingsAdjuster'
import Ingredients from '../components/Ingredients'
import Instructions from '../components/Instructions'
import RelatedRecipes from '../components/RelatedRecipes'
import './RecipePage.css'

export default function RecipePage() {
  const { slug } = useParams()
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    return <Navigate to="/recipes" replace />
  }

  return <RecipeDetail recipe={recipe} />
}

function RecipeDetail({ recipe }) {
  const [servings, setServings] = useState(recipe.yields.amount)
  const chef = getChefBySlug(recipe.chefSlug)
  const category = getCategoryBySlug(recipe.category)
  const related = getRelatedRecipes(recipe)
  const factor = servings / recipe.yields.amount

  useSEO(recipe.name, `${recipe.description} A recipe by ${chef?.name ?? 'our kitchen'}.`)

  return (
    <article className="recipe-page">
      <div className="recipe-hero">
        <img src={recipe.image} alt={recipe.name} />
      </div>

      <div className="container recipe-header">
        {category && (
          <Link to={`/recipes?category=${category.slug}`} className="eyebrow recipe-category-link">
            {category.name}
          </Link>
        )}
        <h1>{recipe.name}</h1>
        <p className="recipe-description">{recipe.description}</p>

        {chef && (
          <Link to={`/chefs/${chef.slug}`} className="recipe-chef">
            <img src={chef.photo} alt="" />
            <div>
              <span className="recipe-chef-label">Recipe by</span>
              <span className="recipe-chef-name">{chef.name}</span>
            </div>
          </Link>
        )}

        <RecipeStats recipe={recipe} />
      </div>

      <div className="container recipe-body">
        <div className="recipe-ingredients-col">
          <div className="recipe-panel">
            <ServingsAdjuster
              servings={servings}
              unit={recipe.yields.unit}
              onChange={setServings}
              min={1}
            />
            <Ingredients sections={recipe.ingredients} factor={factor} />
          </div>
        </div>
        <div className="recipe-instructions-col">
          <Instructions steps={recipe.instructions} />
        </div>
      </div>

      <div className="container">
        <RelatedRecipes recipes={related} />
      </div>
    </article>
  )
}
