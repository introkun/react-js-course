import React from 'react';
import './Car.css'

const car = props => {
  const inputClasses = ['input']

  if (props.name)
    inputClasses.push('green')
  else
    inputClasses.push('red')

  if (props.name.length > 4)
    inputClasses.push('bold')

  return (
  <div className="Car">
    <h3>Car name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <input
      type="text"
      onChange={props.onNameChange}
      value={props.name}
      className={inputClasses.join(' ')} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
  )
}

export default car