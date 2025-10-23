interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({pokemonList, setPokemonName }: NavBarProps) {
	const handleClick = (name: string) => {
		setPokemonName(name);
		if (name === "pikachu") {
			alert("Pika pikachu !!!!");
		}
	};
  return (
  <nav>
			{pokemonList.map((pokemon) => (
				<button
				key={pokemon.name}
				onClick={() => handleClick(pokemon.name)} 
				>
					{pokemon.name}
					</button>
			))}

		</nav>
  );
}

export default NavBar;