import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChefHat, Menu, X } from 'lucide-react'
import './Navbar.css'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/recipes', label: 'Recipes' },
  { to: '/chefs', label: 'Chefs' },
  { to: '/about', label: 'About' },
]

// "Categories" opens the same list view as "Recipes" (scrolled to the filter
// bar), so it's a plain link rather than a NavLink — it should never fight
// "Recipes" for the active state.
const CATEGORIES_LINK = { to: '/recipes', label: 'Categories' }

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <ChefHat size={22} aria-hidden="true" />
          <span>The Kitchen Table</span>
        </NavLink>

        <button
          className="navbar-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="primary-navigation" className={`navbar-links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {LINKS.slice(0, 3).map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `navbar-link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to={CATEGORIES_LINK.to} className="navbar-link" onClick={() => setOpen(false)}>
            {CATEGORIES_LINK.label}
          </Link>
          {LINKS.slice(3).map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `navbar-link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
