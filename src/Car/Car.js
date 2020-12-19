import React from 'react'
import classes from './Car.module.scss'
import withClass from '../hoc/withClass'

class Car extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('Car render')
    const inputClasses = [classes.input]

    if (this.props.name)
      inputClasses.push(classes.green)
    else
      inputClasses.push(classes.red)

    if (this.props.name.length > 4)
      inputClasses.push(classes.bold)

    return (
    <div className={classes.Car}>
      <h3>Car name: {this.props.name}</h3>
      <p>Year: <strong>{this.props.year}</strong></p>
      <input
        type="text"
        onChange={this.props.onNameChange}
        value={this.props.name}
        className={inputClasses.join(' ')} />
      <button onClick={this.props.onDelete}>Delete</button>
    </div>
    )
  }
}

export default withClass(Car, classes.Car)