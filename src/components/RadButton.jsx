export default function RadButton ({ percentage, onClick }) {
  const isCustom = percentage === 'Custom'
  const customClassName = isCustom ? 'percentageLabel custom' : 'percentageLabel number'
  return (
    <label className={customClassName} htmlFor={percentage}>
      {isCustom ? <span>{percentage}</span> : <span>{percentage}%</span>}
      <input onClick={onClick} id={percentage} name="percentage" type='radio' value={percentage} className="percentajeButton"></input>
    </label>
  )
}
