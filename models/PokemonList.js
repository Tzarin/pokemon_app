import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Make a GET request to the PokeAPI
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => {
        // The data from the API contains detailed information about the Pokemon
        // We'll extract the name and image URL from the response
        const pokemonData = {
          name: response.data.name,
          img: response.data.sprites.front_default
        };
        
        // Update the state with the fetched Pokemon data
        setPokemonList([pokemonData]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;

