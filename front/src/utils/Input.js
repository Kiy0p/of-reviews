import React from "react";

const Input = ({ field, value, type, handleChange }) => {
  return (
    <label>
      <p>{ field }</p>
      <input
      value={ value }
      onChange={ handleChange(field) }
      type={ type }
      placeholder="pseudo" 
      required/>
    </label>
  )
}

export default Input