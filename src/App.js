import React, { Component } from 'react';
import Car from './Car/Car'

class App extends Component {

  constructor(props) {
    console.log('App constructor')
    super(props)

    this.state = {
      cars: [
        {name: 'Ford', year: '2018'},
        // {name: 'Audi', year: '2016'},
        // {name: 'Mazda', year: '2010'}
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }

  onNameChange(name, index) {
    console.log(name, index)
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  toggleCarsHandler = () => {
    this.setState({showCars: !this.state.showCars})
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars})
  }

  UNSAFE_componentWillMount() {
    console.log('App UNSAFE_componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('App render')
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onNameChange={event => this.onNameChange(event.target.value, index)} />
        )
      })
    }

    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        <div style={{
          width: '400px',
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>
      </div>
    );
  }
}

export default App;
