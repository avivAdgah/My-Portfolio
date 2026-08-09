import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import RecipesList from './pages/RecipesList'
import RecipePage from './pages/RecipePage'
import ChefsList from './pages/ChefsList'
import ChefPage from './pages/ChefPage'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipesList />} />
          <Route path="/recipes/:slug" element={<RecipePage />} />
          <Route path="/chefs" element={<ChefsList />} />
          <Route path="/chefs/:slug" element={<ChefPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
