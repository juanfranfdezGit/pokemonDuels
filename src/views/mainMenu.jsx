import { useNavigate } from "react-router-dom";

function MainMenu() {

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

  function navOponents() {
    Navigate('/oponents')
  }

  function navHelp() {
    Navigate('/help')
  }

  function closeUser() {
    Navigate('/')
  }

  return (
    <>
      <section className="gameMenu goGame">
        <div className="gameMenu__sidebar">
          <ul className="gameMenu__sidebar-list">
            <div className="gameMenu__logo__container">
                <img className="gameMenu__logo__container-logo" src="/assets/images/pokemonLogo.png" alt="Pokemon logo" />
                <h1 className="gameMenu__logo__container-title">Duels!</h1>
            </div>
            <li><button className="gameMenu__sidebar-button" onClick={navPokedex}>Pokedex</button></li>
            <li><button className="gameMenu__sidebar-button" onClick={navMyCards}>Mis Cartas</button></li>
            <li><button className="gameMenu__sidebar-button disabled" disabled onClick={navOponents}>Oponentes</button></li>
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