const FRACTIONS = [
  [1 / 4, '1/4'],
  [1 / 3, '1/3'],
  [1 / 2, '1/2'],
  [2 / 3, '2/3'],
  [3 / 4, '3/4'],
]

// Formats a scaled quantity as a whole number, a simple fraction, or a
// whole-plus-fraction (e.g. "1 1/2") so recipes read naturally.
export function formatQuantity(value) {
  if (value == null) return ''
  const whole = Math.floor(value)
  const remainder = value - whole

  if (remainder < 0.05) return String(whole || value.toFixed(2))
  if (remainder > 0.95) return String(whole + 1)

  let closest = null
  let closestDiff = Infinity
  for (const [decimal, label] of FRACTIONS) {
    const diff = Math.abs(decimal - remainder)
    if (diff < closestDiff) {
      closestDiff = diff
      closest = label
    }
  }

  if (closestDiff > 0.06) return value.toFixed(2).replace(/\.?0+$/, '')
  return whole > 0 ? `${whole} ${closest}` : closest
}

export function scaleMetric(metric, factor) {
  if (!metric) return null
  const match = metric.match(/^([\d.]+)(\D*)$/)
  if (!match) return metric
  const [, amount, unit] = match
  const scaled = Math.round(Number(amount) * factor)
  return `${scaled}${unit}`
}

export function scaleIngredient(item, factor) {
  if (item.qty == null) return item.name
  const qtyLabel = formatQuantity(item.qty * factor)
  const metricLabel = scaleMetric(item.metric, factor)
  const unitLabel = item.unit ? ` ${item.unit}` : ''
  const metricPart = metricLabel ? ` (${metricLabel})` : ''
  return `${qtyLabel}${unitLabel}${metricPart} ${item.name}`
}
