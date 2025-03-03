import PokemonService from "./services/pokeService";

function App() {

  return (
    <>
      <h1>Pokémon Duels! Card Game</h1>
      <PokemonService /> {/* Renderiza el servicio */}
    </>
  );
}

export default App;