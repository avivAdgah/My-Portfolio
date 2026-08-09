import { useSEO } from '../hooks/useSEO'
import './About.css'

export default function About() {
  useSEO('About', 'The story behind The Kitchen Table, a digital cookbook built to celebrate real chefs and real food.')

  return (
    <div className="container about-page">
      <p className="eyebrow">Our Story</p>
      <h1>A cookbook built around the people who cook.</h1>
      <p>
        The Kitchen Table started as a single recipe card and grew into a small collection of dishes
        we keep coming back to. Every recipe here has been cooked, tested, and cooked again — by chefs
        who care as much about the story behind a dish as the dish itself.
      </p>
      <p>
        We keep the design simple on purpose. No pop-ups, no lengthy backstories before the ingredient
        list — just good photography, clear instructions, and enough detail to get it right the first
        time.
      </p>
      <p>
        Have a recipe you think belongs here, or a correction on one of ours? Reach out — this cookbook
        is always a work in progress.
      </p>
    </div>
  )
}
