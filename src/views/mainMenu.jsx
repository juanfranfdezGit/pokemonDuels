import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const backgrounds = [
  "/assets/images/back01.webp",
  "/assets/images/back02.png",
  "/assets/images/back03.jpg",
  "/assets/images/back04.jpg"
];

function MainMenu() {
  const [background, setBackground] = useState("");
  const [goGame, setGoGame] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackground(randomBg);
  }, []);

  function handleGoGame() {
    setGoGame(!goGame);
  }

  function navPokedex() {
    Navigate('./pokedex')
  }

  return (
    <>
      <section className="mainMenu" style={{ backgroundImage: `url(${background})` }}> 
        <div className="mainMenu__container">
          <img className="mainMenu__container-logo" src="/assets/images/pokemonLogo.png" alt="Pokemon logo" />
          <h1 className="mainMenu__container-title">Duels!</h1>
          <button onClick={handleGoGame} className="mainMenu__container-button">Start!</button>
        </div>
      </section>

      <section className={`gameMenu ${goGame ? "goGame" : ""}`}>
        <div className="gameMenu__sidebar">
          <ul className="gameMenu__sidebar-list">
            <div className="gameMenu__logo__container">
                <img className="gameMenu__logo__container-logo" src="/assets/images/pokemonLogo.png" alt="Pokemon logo" />
                <h1 className="gameMenu__logo__container-title">Duels!</h1>
            </div>
            <li><button className="gameMenu__sidebar-button" onClick={navPokedex}>Pokedex</button></li>
            <li><button className="gameMenu__sidebar-button" onClick={navPokedex}>Mis Cartas</button></li>
            <li><button className="gameMenu__sidebar-button" onClick={navPokedex}>Oponentes</button></li>
            <li><button className="gameMenu__sidebar-button" onClick={navPokedex}>Tienda de Sobres</button></li>
            <li><button className="gameMenu__sidebar-button" onClick={navPokedex}>Ayuda</button></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default MainMenu;