import { useEffect } from 'react'

const SITE_NAME = 'The Kitchen Table'

// Sets the document title and meta description per page since this project
// has no server-rendering step to generate per-route <head> tags.
export function useSEO(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
