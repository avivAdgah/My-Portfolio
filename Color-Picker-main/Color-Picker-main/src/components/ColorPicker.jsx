import { useEffect, useRef, useState } from 'react';
import { getColorInfo, isValidColor } from '../utils/color';
import './ColorPicker.css';

const PRESET_COLORS = [
  '#ef4444',
  '#f97316',
  '#f59e0b',
  '#eab308',
  '#84cc16',
  '#22c55e',
  '#10b981',
  '#14b8a6',
  '#06b6d4',
  '#3b82f6',
  '#6366f1',
  '#8b5cf6',
  '#d946ef',
  '#ec4899',
  '#64748b',
  '#111827',
];

const DEFAULT_COLOR = '#6366f1';
const COPY_FEEDBACK_MS = 1500;

export default function ColorPicker({ initialColor = DEFAULT_COLOR }) {
  const [inputValue, setInputValue] = useState(initialColor);
  const [color, setColor] = useState(() => getColorInfo(initialColor));
  const [copiedField, setCopiedField] = useState(null);
  const copyTimeoutRef = useRef(null);

  const isInputInvalid = inputValue.trim() !== '' && !isValidColor(inputValue);

  useEffect(() => () => clearTimeout(copyTimeoutRef.current), []);

  function commitColor(value) {
    setInputValue(value);
    if (isValidColor(value)) {
      setColor(getColorInfo(value));
    }
  }

  function handleCopy(field, value) {
    navigator.clipboard.writeText(value).then(() => {
      clearTimeout(copyTimeoutRef.current);
      setCopiedField(field);
      copyTimeoutRef.current = setTimeout(() => setCopiedField(null), COPY_FEEDBACK_MS);
    });
  }

  return (
    <div className="color-picker">
      <div
        className="color-picker__preview"
        style={{ backgroundColor: isValidColor(inputValue) ? inputValue : color.hex }}
      >
        <label className="color-picker__swatch-label" htmlFor="native-color-input">
          <span className="sr-only">Pick a color</span>
          <input
            id="native-color-input"
            className="color-picker__swatch-input"
            type="color"
            value={color.hex}
            onChange={(e) => commitColor(e.target.value)}
          />
        </label>
      </div>

      <div className="color-picker__field">
        <label htmlFor="color-text-input">HEX / RGB / color name</label>
        <input
          id="color-text-input"
          type="text"
          className="color-picker__text-input"
          value={inputValue}
          onChange={(e) => commitColor(e.target.value)}
          placeholder="#6366f1, rgb(99, 102, 241), indigo..."
          spellCheck={false}
          autoComplete="off"
          aria-invalid={isInputInvalid}
          aria-describedby="color-input-error"
        />
        <p className="color-picker__error" id="color-input-error" role="alert">
          {isInputInvalid ? 'Not a valid color. Try a HEX code, RGB value, or color name.' : ' '}
        </p>
      </div>

      <div className="color-picker__info">
        <button
          type="button"
          className="color-picker__code"
          onClick={() => handleCopy('hex', color.hex)}
        >
          <span className="color-picker__code-label">HEX</span>
          <span className="color-picker__code-value">{color.hex}</span>
          <span className="color-picker__copy-hint">{copiedField === 'hex' ? 'Copied!' : 'Copy'}</span>
        </button>

        <button
          type="button"
          className="color-picker__code"
          onClick={() => handleCopy('rgb', color.rgbString)}
        >
          <span className="color-picker__code-label">RGB</span>
          <span className="color-picker__code-value">{color.rgbString}</span>
          <span className="color-picker__copy-hint">{copiedField === 'rgb' ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <div className="color-picker__presets">
        {PRESET_COLORS.map((preset) => (
          <button
            key={preset}
            type="button"
            className="color-picker__preset"
            style={{ backgroundColor: preset }}
            aria-label={`Set color to ${preset}`}
            aria-pressed={color.hex === preset}
            onClick={() => commitColor(preset)}
          />
        ))}
      </div>
    </div>
  );
}
