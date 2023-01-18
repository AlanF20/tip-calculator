export default function Input ({ nameFor, imageFor, onChange, value }) {
  return (
    <div className="Input">
      <label className="Input__label" htmlFor={nameFor}>{nameFor}</label>
      <div className="Input__container">
        <img className="Input__container-img" src={imageFor}/>
        <input value={value} onChange={onChange} placeholder="0" className="Input__container-input" id={nameFor} type='number'></input>
      </div>
    </div>
  )
}
