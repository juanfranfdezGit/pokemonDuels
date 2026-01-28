import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../context/GameContext";
import { getUserData } from "../../tools/gameDB";

function Opening() {
  const { user, updateUser } = useContext(GameContext);
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
    const loadUser = async () => {
      try {
        const fetchedUser = await getUserData("user1");

        if (fetchedUser) {
          updateUser(fetchedUser);
          Navigate("/menu");
        }
      } catch (err) {
        console.error("Error al obtener los datos del usuario:", err);
      }
    }

    loadUser();
  }, [Navigate, updateUser])

  useEffect(() => {
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackground(randomBg);
  }, []);

  function navNewUser() {
    Navigate("/newUser")
  }

  function navUpload() {
    Navigate("/upload")
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
              <img className="mainMenu__container-logo" src="/assets/images/PokemonLogo.png" alt="Pokemon logo" />
              <h1 className="mainMenu__container-title">Duels!</h1>
              <button className="mainMenu__container-button" onClick={navNewUser}>Nuevo Usuario</button>
              <button className="mainMenu__container-button" onClick={navUpload}>Cargar Datos</button>
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