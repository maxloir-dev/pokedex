const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {name: "mew",

    },
];


function PokemonCard() {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <figure key={index}>
          {pokemon.imgSrc !== undefined ? (
            <img src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
            <p>???</p>
          )}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default PokemonCard;