import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// const pokemon = require('pokemontcgsdk');

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sets: []
    };
  }

  componentDidMount() {
    fetch("https://api.pokemontcg.io/v1/sets")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            sets: result.sets
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, sets } = this.state;
    console.log(sets)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {sets.map(item => (
            <li key={item.name}>
              {item.name} 
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default MyComponent;