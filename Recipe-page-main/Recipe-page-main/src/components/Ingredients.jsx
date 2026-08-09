import { useState } from 'react'
import { scaleIngredient } from '../utils/servings'
import './Ingredients.css'

export default function Ingredients({ sections, factor }) {
  const [checked, setChecked] = useState({})

  function toggle(key) {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="ingredients">
      <h2>Ingredients</h2>
      {sections.map((section, sectionIndex) => (
        <div className="ingredients-section" key={section.section ?? sectionIndex}>
          {section.section && <h3 className="ingredients-subtitle">{section.section}</h3>}
          <ul className="ingredients-list">
            {section.items.map((item, itemIndex) => {
              const key = `${sectionIndex}-${itemIndex}`
              return (
                <li key={key} className="ingredient-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={!!checked[key]}
                      onChange={() => toggle(key)}
                    />
                    <span className={checked[key] ? 'is-checked' : ''}>
                      {scaleIngredient(item, factor)}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
