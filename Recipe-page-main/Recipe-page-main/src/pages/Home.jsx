import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { getFeaturedRecipe, getPopularRecipes, getNewRecipes } from '../data/recipes'
import { getChefBySlug } from '../data/chefs'
import { formatMinutes, totalTime } from '../utils/time'
import { useSEO } from '../hooks/useSEO'
import RecipeCard from '../components/RecipeCard'
import './Home.css'

export default function Home() {
  useSEO(
    undefined,
    'Browse recipes from chefs around the world — desserts, pasta, breakfast, baking, and vegan dishes, all in one digital cookbook.',
  )

  const featured = getFeaturedRecipe()
  const featuredChef = getChefBySlug(featured.chefSlug)
  const popular = getPopularRecipes(4)
  const fresh = getNewRecipes(3)

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">A digital cookbook</p>
          <h1>Recipes worth cooking, from chefs worth following.</h1>
          <p className="hero-subtitle">
            Browse dependable, tested recipes for every occasion — then get to know the chefs behind them.
          </p>
          <div className="hero-actions">
            <Link to="/recipes" className="btn btn-primary">Browse Recipes</Link>
            <Link to="/chefs" className="btn btn-secondary">Meet the Chefs</Link>
          </div>
        </div>
      </section>

      <section className="featured container" aria-labelledby="featured-heading">
        <div className="featured-image">
          <img src={featured.image} alt={featured.name} />
        </div>
        <div className="featured-content">
          <p className="eyebrow">Featured Recipe</p>
          <h2 id="featured-heading">{featured.name}</h2>
          <p className="featured-description">{featured.description}</p>
          {featuredChef && (
            <Link to={`/chefs/${featuredChef.slug}`} className="featured-chef">
              <img src={featuredChef.photo} alt="" />
              <span>by {featuredChef.name}</span>
            </Link>
          )}
          <div className="featured-meta">
            <Clock size={16} aria-hidden="true" />
            <span>{formatMinutes(totalTime(featured))}</span>
          </div>
          <Link to={`/recipes/${featured.slug}`} className="btn btn-primary">
            View Recipe <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="container section-block" aria-labelledby="popular-heading">
        <div className="section-heading">
          <h2 id="popular-heading">Popular Recipes</h2>
          <Link to="/recipes" className="section-link">See all recipes</Link>
        </div>
        <div className="recipe-grid">
          {popular.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="container section-block" aria-labelledby="new-heading">
        <div className="section-heading">
          <h2 id="new-heading">New This Month</h2>
        </div>
        <div className="recipe-grid">
          {fresh.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  )
}
