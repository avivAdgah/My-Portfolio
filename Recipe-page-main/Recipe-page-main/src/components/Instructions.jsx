import './Instructions.css'

export default function Instructions({ steps }) {
  return (
    <div className="instructions">
      <h2>Instructions</h2>
      <ol className="instructions-list">
        {steps.map((step, index) => (
          <li className="instruction-step" key={index}>
            <span className="instruction-number" aria-hidden="true">{index + 1}</span>
            <div className="instruction-body">
              <p>{step.text}</p>
              {/* step.image is optional today; supported so per-step photos can be added later */}
              {step.image && (
                <img src={step.image} alt={`Step ${index + 1}`} className="instruction-image" loading="lazy" />
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
