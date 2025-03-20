import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context/GameContext";

function Opening() {
  const { user } = useContext(GameContext);
  const Navigate = useNavigate();

  const backgrounds = [
    "/assets/images/back01.webp",
    "/assets/images/back02.png",
    "/assets/images/back03.jpg",
    "/assets/images/back04.jpg"
  ];

  const [started, setStarted] = useState(false)
  const [background, setBackground] = useState("");

  function handleStarted() {
      setStarted(true);
  }

  useEffect(() => {
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackground(randomBg);

    console.log("User in context: ", user);
  }, [user]);

  function navNewUser() {
    Navigate("/newUser")
  }

  function navMenu() {
    Navigate("/menu")
  }

  return (
    <>
      {user === null ? (
        <>
          <main className={`pokeball__opening ${started ? "started" : ""}`}>
            <div onClick={handleStarted} className={`pokeball__opening-button ${started ? "started" : ""}`}>
            </div>
          </main>

          <section className="mainMenu" style={{ backgroundImage: `url(${background})` }}> 
            <div className="mainMenu__container">
              <img className="mainMenu__container-logo" src="/assets/images/pokemonLogo.png" alt="Pokemon logo" />
              <h1 className="mainMenu__container-title">Duels!</h1>
              <button className="mainMenu__container-button" onClick={navNewUser}>Nuevo Usuario</button>
              <button className="mainMenu__container-button" onClick={navMenu}>Cargar Datos</button>
            </div>
          </section>
        </>
      ) : (
        <div>Bienvenido, {user.username}!</div>
      )}
      
    </>
  );
}

export default Opening;