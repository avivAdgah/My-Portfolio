import { Search } from 'lucide-react'
import './SearchBar.css'

export default function SearchBar({ value, onChange, placeholder = 'Search by dish, chef, or ingredient…' }) {
  return (
    <div className="search-bar">
      <Search size={18} aria-hidden="true" />
      <label htmlFor="recipe-search" className="visually-hidden">Search recipes</label>
      <input
        id="recipe-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}
