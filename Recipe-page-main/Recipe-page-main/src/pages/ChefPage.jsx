import { Navigate, useParams } from 'react-router-dom'
import { getChefBySlug } from '../data/chefs'
import { getRecipesByChef } from '../data/recipes'
import { useSEO } from '../hooks/useSEO'
import RecipeCard from '../components/RecipeCard'
import './ChefPage.css'

export default function ChefPage() {
  const { slug } = useParams()
  const chef = getChefBySlug(slug)

  if (!chef) {
    return <Navigate to="/chefs" replace />
  }

  return <ChefDetail chef={chef} />
}

function ChefDetail({ chef }) {
  const recipesByChef = getRecipesByChef(chef.slug)

  useSEO(chef.name, `${chef.bio} Browse all recipes by ${chef.name}.`)

  return (
    <div className="chef-page">
      <div className="container chef-header">
        <img src={chef.photo} alt={chef.name} className="chef-header-photo" />
        <div>
          <p className="eyebrow">{chef.title}</p>
          <h1>{chef.name}</h1>
          <p className="chef-bio">{chef.bio}</p>
        </div>
      </div>

      <div className="container">
        <h2 className="chef-recipes-heading">Recipes by {chef.name}</h2>
        {recipesByChef.length > 0 ? (
          <div className="recipe-grid">
            {recipesByChef.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p className="recipes-empty">No recipes published yet.</p>
        )}
      </div>
    </div>
  )
}
