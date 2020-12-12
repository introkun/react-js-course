import React from 'react';
import './Car.css'

const car = props => (
  <div className="Car">
    <h3>Car name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <input type="text" onChange={props.onNameChange} value={props.name} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
)

export default car