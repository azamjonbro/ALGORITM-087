import React from 'react'

function input({type, pattern, placeholder, id, label,min,max,maxLength}) {
  return (
   <div className="form-input">
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type??'text'} pattern={pattern} placeholder={placeholder} min={min} max={max} maxLength={maxLength} />
    {/* ?: -> ternary*/}
    {/* ?? Nullish */}
   </div>
  )
}
export default input
