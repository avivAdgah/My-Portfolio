import { Link } from 'react-router-dom'
import { ChefHat, Instagram, Facebook, Youtube } from 'lucide-react'
import { categories } from '../data/categories'
import { chefs } from '../data/chefs'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="navbar-brand footer-logo">
            <ChefHat size={22} aria-hidden="true" />
            <span>The Kitchen Table</span>
          </div>
          <p className="footer-tagline">A digital cookbook of recipes from chefs around the world.</p>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <nav aria-label="Navigate">
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/chefs">Chefs</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <nav aria-label="Categories">
          <h4>Categories</h4>
          <ul>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link to={`/recipes?category=${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Chefs">
          <h4>Chefs</h4>
          <ul>
            {chefs.map((chef) => (
              <li key={chef.slug}>
                <Link to={`/chefs/${chef.slug}`}>{chef.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer-bottom container">
        <p>&copy; {year} The Kitchen Table. All rights reserved.</p>
      </div>
    </footer>
  )
}
