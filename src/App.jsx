import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=> {
    axios("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  })

  const getPokemons = () => {
    axios("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={getPokemons}>Get Pokemons!</button>
      <ul>
        {
          pokemons.map((pokemon, i) => {
              return <li key={i}>{pokemon.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;