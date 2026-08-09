import RecipeCard from './RecipeCard'
import './RelatedRecipes.css'

export default function RelatedRecipes({ recipes }) {
  if (!recipes.length) return null

  return (
    <section className="related-recipes" aria-labelledby="related-heading">
      <h2 id="related-heading">You might also like</h2>
      <div className="related-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </section>
  )
}
