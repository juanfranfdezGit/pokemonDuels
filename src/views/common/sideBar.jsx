import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/GameContext";

function MainMenu() {

  const { deleteUser, user } = useContext(GameContext)
  const [loading, setLoading] = useState(true);

  const Navigate = useNavigate();

  function navPokedex() {
    Navigate('/pokedex')
  }

  function navMyCards() {
    Navigate('/myCards')
  }

  function navShop() {
    Navigate('/shop')
  }

  function navHelp() {
    Navigate('/help')
  }

  function closeUser() {
    deleteUser();
    Navigate('/')
  }

  useEffect(() => {
    if (user === undefined) {
      return;
    }

    if (!user) {
      Navigate("/");
    } else {
      setLoading(false);
    }
  }, [user, Navigate]);

  if (loading) {
    return <div><img className="loading" src="/assets/images/pokeballLoading.gif" alt="loading" /></div>;
  }
  
  return (
    <>
      <section className="gameMenu goGame">
        <div className="gameMenu__sidebar">
          <ul className="gameMenu__sidebar-list">
            <div className="gameMenu__logo__container">
                <img className="gameMenu__logo__container-logo" src="/assets/images/PokemonLogo.png" alt="Pokemon logo" />
                <h1 className="gameMenu__logo__container-title">Duels!</h1>
            </div>
            <li><button className="gameMenu__sidebar-button" onClick={navPokedex}>Pokedex</button></li>
            <li><button className="gameMenu__sidebar-button" onClick={navMyCards}>Mis Cartas</button></li>
            <li><button className="gameMenu__sidebar-button" onClick={navShop}>Tienda de Sobres</button></li>
            <li><button className="gameMenu__sidebar-button" onClick={navHelp}>Ayuda</button></li>
            <li><button className="gameMenu__sidebar-button" onClick={closeUser}>Cerrar Sesión</button></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default MainMenu;