export function formatMinutes(minutes) {
  if (!minutes) return '0 min'
  const hrs = Math.floor(minutes / 60)
  const mins = minutes % 60
  if (hrs === 0) return `${mins} min`
  if (mins === 0) return `${hrs} hr`
  return `${hrs} hr ${mins} min`
}

export function totalTime(recipe) {
  return (recipe.prepTime || 0) + (recipe.cookTime || 0) + (recipe.restTime || 0)
}
