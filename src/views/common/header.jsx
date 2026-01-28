import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { saveAs } from "file-saver";

function BackButton() {
  const Navigate = useNavigate();
  const location = useLocation();
  let { pathname } = location;
  const { user } = useContext(GameContext);
  const [overlay, setOverlay] = useState(false);

  if (pathname.startsWith("/")) {
    pathname = pathname.substring(1);
  }

  let pageTitle;
  let profImg;

  if (user) {
    switch (user.selectedImage) {
      case "user01":
        profImg = "/assets/images/profileImg/prof01.webp";
        break;

      case "user02":
        profImg = "/assets/images/profileImg/prof02.webp";
        break;

      case "user03":
        profImg = "/assets/images/profileImg/prof03.webp";
        break;

      default:
        break;
    }
  }

  if (pathname === "pokedex") {
    pageTitle = "Pokédex";
  } else if (pathname === "myCards") {
    pageTitle = "Mis Cartas";
  } else if (pathname === "shop") {
    pageTitle = "Tienda";
  } else if (pathname === "newUser") {
    pageTitle = "Nuevo Usuario";
  } else if (pathname === "upload") {
    pageTitle = "Cargar Datos";
  } else if (pathname === "help") {
    pageTitle = "Ayuda";
  }

  function handleOverlay() {
    setOverlay(!overlay);
  }

  function download() {
    const userData = JSON.stringify(user, null, 2);

    const blob = new Blob([userData], { type: "application/json" });

    saveAs(blob, "userData.json");

    setOverlay(!overlay);
  }

  function navMainMenu() {
    if (pageTitle === "Nuevo Usuario" || pageTitle === "Cargar Datos") {
      Navigate("/");
    } else {
      Navigate("/menu");
    }
  }

  return (
    <>
      <header className="header">
        <button className="back__button" onClick={navMainMenu}>
          <img src="/assets/logos/arrowBack.png" alt="back button" />
          Menú Principal
        </button>
        <h2 className="pages__title">{pageTitle}</h2>
        {(pageTitle === "Mis Cartas" || pageTitle === "Tienda") && (
          <div className="header__user">
            <p className="header__user__money">{user.money}</p>
            <img
              className="pokecuarto"
              src="/assets/images/profileImg/pokecuartos.webp"
              alt="pokecuarto"
            />
            <div className="header__user__profImg" onClick={handleOverlay}>
              <img src={profImg} alt={user.username} />
            </div>
            <div
              className={`header__user__profImg-overlay ${overlay ? "active" : ""}`}
              onClick={download}
            >
              <p>Descargar Datos</p>
              <img src="/assets/logos/download.png" alt="download" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default BackButton;
