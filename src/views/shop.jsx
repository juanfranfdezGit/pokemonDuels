import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Shop() {
  const [opening, setOpening] = useState(false);
  const [selectedEnvelop, setSelectedEnvelop] = useState([true, true, true, true]);
  const [cards, setCards] = useState([]);
  const [randomCards, setRandomCards] = useState([[], [], [], []]);
  const [attack, setAttacks] = useState([]);

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

      const shuffle = [...cards].sort(() => Math.random() - 0.5);
      const selected = shuffle.slice(0, 5);
  
      const shinyCards = selected.map(card => {
        if (card.isShiny === false) {
          card.isShiny = Math.random() < 0.2;
        }
        return card;
      })
  
      const newRandomCards = [...randomCards];
      newRandomCards[i] = shinyCards;
      setRandomCards(newRandomCards);
      console.log(`Sobre ${i} abierto`);
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
              <div className={`envelops__container ${isSelected ? "selectedCard" : "nonSelected"}`}>
              <img onClick={() => selectingEnvelop(i)} className="envelops__container-img" src="/assets/images/envelop.webp" alt="card envelop" />
              <ul className="envelops__container-cards">
              {randomCards[i].map((card) => (
                <li 
                    key={card.id}
                    className={`shopCards myCards__container__list__item card-type--`+card.tipo[0]}>
                    <div className="myCards__container__list__item-nameContainer">
                        <p className="myCards__container__list__item-name">{card.name}</p>
                        <p className="myCards__container__list__item-PS"><span>PS</span>{card.stats[0].toString().padEnd(2, '0')}</p>
                    </div>
                    <div className={`myCards__container__list__item-imgContainer myCards__container__list__item-imgContainer--`+card.tipo[0]}>
                        <img className="myCards__container__list__item-image" src={card.isShiny ? card.imageShiny : card.image} alt={card.name+` image`} />
                        <img className="myCards__container__list__item-back" src="/assets/images/brillo.png" alt={card.name+` image`} />
                        <div className="cards-typeContainer">
                            {card.tipo.map((type, index) => (
                              <p key={index} className={`cards-type pokedex-type--`+type}>{type}</p>
                            ))}
                        </div>
                    </div>
                    <p className="myCards__container__list__item-description">{card.description}</p>
                    <div className="myCards__container__list__item-habilityContainer">
                        <p className="myCards__container__list__item-hability">{card.Habilidad} <span>?</span></p>
                        {(() => {
                            const attackFind = attack.find(a => a.Habilidad === card.Habilidad);
                            return attackFind ? <p className="myCards__container__list__item-PH"><span>PH:</span> {attackFind.PH}</p> : "Ataque no encontrado";
                        })()}
                    </div>
                </li>
              ))}
              </ul>
            </div>
            ))}
          </div>
        </section>
    </>
  );
}
  
  export default Shop;