import { useState } from "react";
import "./App.css";
import PokemonCard from './components1/PokemonCard';

const pokemonList = [
  {

    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


function App() {
	const [pokemonName, setPokemonName] = useState("bulbasaur");
	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);
	if (pokemon == null){
		throw new Error("Invalide pokemon name");
	}

  return (
	<div>
		<PokemonCard pokemon={pokemon} />
		<button onClick={() => setPokemonName("bulbasaur")}>bulbasaur</button>
		<button onClick={() => setPokemonName("mew")}>mew</button>
	</div>
  );
  
}

export default App;