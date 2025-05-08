import Header from "../components/header";
import PokemonCard from '../components/pokemonCard';
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { GameContext } from "../context/GameContext";

function Shop() {
  const [opening, setOpening] = useState(false);
  const [selectedEnvelop, setSelectedEnvelop] = useState([null, null, null, null]);
  const [cards, setCards] = useState([]);
  const [randomCards, setRandomCards] = useState([[], [], [], []]);
  const [attack, setAttacks] = useState([]);

  const { user, addCards } = useContext(GameContext);

  const Navigate = useNavigate();

  useEffect(() => {
    fetch("/services/pokedex.json")
      .then((res) => res.json())
      .then((data) => {setCards(data);})
      .catch((error) => console.error("Error cargando JSON:", error));
  }, []);

  useEffect(() => {
    fetch("/services/attacks.json")
      .then((res) => res.json())
      .then((data) => {setAttacks(data);})
      .catch((error) => console.error("Error cargando JSON:", error));
  }, []);

  function selectingEnvelop(i) {
    const selectEnvelop = selectedEnvelop.map((_, index) => index === i);
    setSelectedEnvelop(selectEnvelop);

    const shuffle = [...cards].sort(() => Math.random() - 0.4);
    const selected = shuffle.slice(0, 4).map(card => {

      if (card.isShiny === undefined) {
          return {
            ...card,
            isShiny: false
          };
      }

      if (card.isShiny === false) {
          return {
            ...card,
            isShiny: Math.random() < 0.2  
          };
      }

      return { ...card };
  });

    setRandomCards(prev => prev.map((envelop, index) => (index === i ? selected : envelop)));

    addCards(selected.map(card => ({
      id: card.id,
      isShiny: card.isShiny
    })));
}

  function navPokedex() {
    Navigate('/pokedex')
  }

  function navMyCards() {
    Navigate('/myCards')
  }

  function navHelp() {
    Navigate('/help')
  }

  function startOpening() {
    setOpening(true);
    setSelectedEnvelop([null, null, null, null]);
  }

  return (
    <>
        <Header />
        <section className="shop">
            <ul className={opening === true ? "shop__menu disallow" : "shop__menu allow"}>
              <li className="shop__menu-item" onClick={startOpening}>Abrir Sobres</li>
              <li className="shop__menu-item" onClick={navMyCards}>Mis Cartas</li>
              <li className="shop__menu-item" onClick={navPokedex}>Pokédex</li>
              <li className="shop__menu-item" onClick={navHelp}>Información</li>
            </ul>
        </section>
        <section className={opening === true ? "opening allow" : "opening disallow"}>
          <div className="envelops">
            {selectedEnvelop.map((isSelected, i) => (
              <div className={`envelops__container ${isSelected === null ? "" : isSelected === true ? "selectedCard" : "nonSelected"}`}>
              <img onClick={() => selectingEnvelop(i)} className="envelops__container-img" src="/assets/images/envelop.webp" alt="card envelop" />
              <ul className="envelops__container-cards">
              {randomCards[i].map((card) => {
				const isShiny = card.isShiny;
				const attackFind = attack.find(a => a.Habilidad === card.Habilidad);

				return (
					<li key={card.id}>
						<PokemonCard 
							card={card}
							isShiny={card.isShiny}
							attack={attackFind}
						/>
                	</li>
				)
              })}
              </ul>
            </div>
            ))}
          </div>

          {selectedEnvelop.map((isSelected, _) => (
              <div className={isSelected === true ? "actionsAllow" : "actionsDisallow"}>
                <button className="actionsAllow-item" onClick={startOpening}>Abrir Más</button>
                <button className="actionsAllow-item" onClick={navMyCards}>Mis Cartas</button>
              </div>
          ))}
        </section>
    </>
  );
}
  
  export default Shop;