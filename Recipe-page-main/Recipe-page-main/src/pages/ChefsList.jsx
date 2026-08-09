import { chefs } from '../data/chefs'
import { useSEO } from '../hooks/useSEO'
import ChefCard from '../components/ChefCard'
import './ChefsList.css'

export default function ChefsList() {
  useSEO('Chefs', 'Meet the chefs behind every recipe in the cookbook.')

  return (
    <div className="container chefs-list">
      <header className="chefs-list-header">
        <p className="eyebrow">The People Behind the Food</p>
        <h1>Our Chefs</h1>
      </header>

      <div className="chefs-grid">
        {chefs.map((chef) => (
          <ChefCard key={chef.slug} chef={chef} />
        ))}
      </div>
    </div>
  )
}
