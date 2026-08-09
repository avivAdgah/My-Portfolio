import { categories } from '../data/categories'
import './CategoryFilter.css'

export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="category-filter" role="group" aria-label="Filter by category">
      <button
        type="button"
        className={`category-pill ${value === '' ? 'is-active' : ''}`}
        onClick={() => onChange('')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.slug}
          type="button"
          className={`category-pill ${value === category.slug ? 'is-active' : ''}`}
          onClick={() => onChange(category.slug)}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}
