import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: '2018'},
      {name: 'Audi', year: '2016'},
      {name: 'Mazda', year: '2010'}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  changeTitleHandler = (newTitle) => {
    this.setState({pageTitle: newTitle})
  };

  toggleCarsHandler = () => {
    this.setState({showCars: !this.state.showCars})
  }


  render() {
    console.log('render')
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
            onChangeTitle={() => this.changeTitleHandler(car.name)} />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        { cars }
      </div>
    );
  }
}

export default App;
