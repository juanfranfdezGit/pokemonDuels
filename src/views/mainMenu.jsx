import PokemonService from '../services/pokeService'
import { useEffect, useState } from "react";

const backgrounds = [
  "/assets/images/back01.webp",
  "/assets/images/back02.webp",
  "/assets/images/back03.jpg",
  "/assets/images/back04.jpg"
];

function MainMenu() {
  const [background, setBackground] = useState("");

  useEffect(() => {
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackground(randomBg);
  }, []);

  return (
    <>
      <div className="mainMenu" style={{ backgroundImage: `url(${background})` }}> 
        <h1 className="mainMenu__title">Pokémon Duels! Card Game</h1>
        <button className="mainMenu__start buttonLight">Start!</button>
        <PokemonService /> {/* Renderiza el servicio */}
      </div>
    </>
  );
}

export default MainMenu;