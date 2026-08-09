// Reuse a single offscreen canvas for color parsing instead of allocating one per call.
const canvas = document.createElement('canvas');
canvas.width = 1;
canvas.height = 1;
const ctx = canvas.getContext('2d');

/**
 * Accepts any CSS color the browser understands (hex, rgb/rgba, hsl, named
 * colors like "rebeccapurple") and reports whether it's valid.
 */
export function isValidColor(value) {
  if (typeof value !== 'string' || !value.trim()) return false;
  const probe = new Option().style;
  probe.color = value;
  return probe.color !== '';
}

/**
 * Resolves any valid CSS color string to its HEX and RGB representation by
 * actually rendering it to a 1x1 canvas, so alpha, named colors, and shorthand
 * hex are all normalized consistently.
 */
export function getColorInfo(value) {
  if (!isValidColor(value)) return null;

  ctx.clearRect(0, 0, 1, 1);
  ctx.fillStyle = value;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;

  const hex = `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;

  return {
    hex,
    rgb: { r, g, b },
    rgbString: `rgb(${r}, ${g}, ${b})`,
  };
}
