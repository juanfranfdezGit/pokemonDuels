import { useEffect } from "react";

const fetchPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
};

const PokemonService = () => {
  useEffect(() => {
    fetchPokemon();
  }, []);

  return <div>Check the console for Pokémon data!</div>;
};

export default PokemonService;