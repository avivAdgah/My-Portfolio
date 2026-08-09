import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import './NotFound.css'

export default function NotFound() {
  useSEO('Page Not Found', 'The page you are looking for does not exist.')

  return (
    <div className="container not-found">
      <p className="eyebrow">404</p>
      <h1>We couldn't find that page.</h1>
      <p>It might have been moved, or the recipe simply isn't in the book yet.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  )
}
