import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <section className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </section>
    )
  }
}

export default App;
