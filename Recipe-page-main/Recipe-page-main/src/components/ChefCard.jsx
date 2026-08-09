import { Link } from 'react-router-dom'
import './ChefCard.css'

export default function ChefCard({ chef }) {
  return (
    <Link to={`/chefs/${chef.slug}`} className="chef-card">
      <img src={chef.photo} alt={chef.name} className="chef-card-photo" loading="lazy" />
      <h3 className="chef-card-name">{chef.name}</h3>
      <p className="chef-card-title">{chef.title}</p>
    </Link>
  )
}
