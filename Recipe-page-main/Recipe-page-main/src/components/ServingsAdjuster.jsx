import { Minus, Plus, Users } from 'lucide-react'
import './ServingsAdjuster.css'

export default function ServingsAdjuster({ servings, unit, onChange, min = 1 }) {
  return (
    <div className="servings-adjuster">
      <span className="servings-label">
        <Users size={16} aria-hidden="true" /> Servings
      </span>
      <div className="servings-control">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, servings - 1))}
          aria-label="Decrease servings"
          disabled={servings <= min}
        >
          <Minus size={14} />
        </button>
        <span aria-live="polite">{servings} {unit}</span>
        <button type="button" onClick={() => onChange(servings + 1)} aria-label="Increase servings">
          <Plus size={14} />
        </button>
      </div>
    </div>
  )
}
