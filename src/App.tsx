import "./App.css";
import PokemonCard from './components1/PokemonCard';
import NavBar from "./components1/NavBar";
import { useState, useEffect } from "react";



const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {
	const [pokemonName, setPokemonName] = useState("bulbasaur");
  useEffect(() => {
    alert("Hello pokemon trainer :)");
  }, []);
	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);
	if (pokemon == null){
		throw new Error("Invalide pokemon name");
	}
  return (
	<div>
		<NavBar setPokemonName={setPokemonName} pokemonList={pokemonList} />
		<PokemonCard pokemon={pokemon} />
	</div>
  );
  
}

export default App;