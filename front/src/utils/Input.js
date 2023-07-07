import React from "react";

const Input = ({ field, value, handleChange }) => {
  return (
    <label>
      <p>{ field }</p>
      <input
      value={ value }
      onChange={ handleChange(field) }
      type="text" 
      placeholder="pseudo" 
      required/>
    </label>
  )
}

export default Input