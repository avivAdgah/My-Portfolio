import { Clock, Flame, Gauge, Users } from 'lucide-react'
import { formatMinutes } from '../utils/time'
import './RecipeStats.css'

export default function RecipeStats({ recipe }) {
  const stats = [
    { icon: Clock, label: 'Prep Time', value: formatMinutes(recipe.prepTime) },
    { icon: Flame, label: 'Cook Time', value: formatMinutes(recipe.cookTime) },
    { icon: Users, label: 'Yields', value: `${recipe.yields.amount} ${recipe.yields.unit}` },
    { icon: Gauge, label: 'Difficulty', value: recipe.difficulty },
  ]

  return (
    <dl className="recipe-stats">
      {stats.map(({ icon: Icon, label, value }) => (
        <div className="recipe-stat" key={label}>
          <Icon size={18} aria-hidden="true" />
          <div>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        </div>
      ))}
    </dl>
  )
}
