import React from 'react';

const car = props => (
  <div style={{
    border: "1px solid #ccc",
    marginBottom: '10px',
    padding: "10px",
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    borderRadius: '5px'
  }}>
    <h3>Car name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <input type="text" onChange={props.onNameChange} value={props.name} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
)

export default car