import React, { Component } from 'react';
import './App.css';

const CityContext = React.createContext(null);

const MyFirstComponent = ({currentCity}) => {
  return (
    <p>You are in {currentCity}</p>
  );
}

const MyFirstComponentWrapped = () => (
  <CityContext.Consumer>
    {
      value => {
        console.log('Bobby');
        return (
          <MyFirstComponent currentCity={value} />
        )
      }
    }
  </CityContext.Consumer>
);

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {currentCity: 'Sydney'};
  }
  
  onClick = () => {
    this.setState({currentCity: 'Rome'});
  }
  
  render() {
    const {currentCity} = this.state;
    return (
        <div className="App">
          {
            console.log('Robbie')
          }
          <CityContext.Provider value={currentCity}> 
          <MyFirstComponentWrapped />
          <button onClick={this.onClick}>
          Go to Rome
          </button>
          {
            console.log('Jimmy')
          }
          </CityContext.Provider>
        </div>
    );
  }
}

export default App;
