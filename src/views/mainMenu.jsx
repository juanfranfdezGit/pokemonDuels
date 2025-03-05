import { useEffect, useState } from "react";

const backgrounds = [
  "/assets/images/back01.webp",
  "/assets/images/back02.png",
  "/assets/images/back03.jpg",
  "/assets/images/back04.jpg"
];

function MainMenu() {
  const [background, setBackground] = useState("");
  const [goGame, setGoGame] = useState(false);

  useEffect(() => {
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackground(randomBg);
  }, []);

  function handleGoGame() {
    setGoGame(!goGame);
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
        <h2>IN GAME</h2>
        <button onClick={handleGoGame}>OUT</button>
      </section>
    </>
  );
}

export default MainMenu;