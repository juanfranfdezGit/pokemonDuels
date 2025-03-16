import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function OponentsFight() {
    const [oponent, setOponent] = useState([]);
    const [cards, setCards] = useState([]);
    const [attack, setAttacks] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [possibleSlots, setPossibleSlots] = useState([]);
    const [occupiedSlots, setOccupiedSlots] = useState({
        mine01: false,
        mine02: false,
        mine03: false,
        mine04: false,
        mine05: false
    });
    const Navigate = useNavigate();
    const { name } = useParams();

    useEffect(() => {
        fetch("/services/oponents.json")
          .then((res) => res.json())
          .then((data) => {setOponent(data);})
          .catch((error) => console.error("Error cargando JSON:", error));
    }, []);

    useEffect(() => {
        fetch("/services/myCards.json")
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

    const oponentSelected = oponent.find(op => op.name === name);

    function navOponents() {
        Navigate('/oponents')
    }

    function handleSelectedCard(cardID) {
        setSelectedCard(cardID === selectedCard ? null : cardID)
    }

    function handlePutCard(slot) {
        if (!selectedCard || occupiedSlots[slot]) return;

        const cardToPlace = cards.find(card => card.id === selectedCard);
        if (!cardToPlace) return;

        setOccupiedSlots(prev => ({...prev, [slot]: cardToPlace}))

        setCards(prevCards => prevCards.filter(card => card.id !== selectedCard));

        setSelectedCard(null);
    }

    return (
      <>
          <div className="oponentsFight">
            <div className="oponentsFight__Menu">
                <ul className="oponentsFight__Menu__list">
                    <button className="back__button" onClick={navOponents}><img src="/assets/logos/arrowBack.png" alt="back button" />Rendirse</button>
                </ul>
            </div>
            <div className="oponentsFight__Oponent-container">
                {oponentSelected ? (
                    <div className="oponentsFight__Oponent-visual">
                        <p className="oponentsFight__Oponent-visual-name">{oponentSelected.name}</p>
                        <img className="oponentsFight__Oponent-visual-image" src={oponentSelected.img} alt={oponentSelected.name} />
                        <div className="oponentsFight__Oponent-visual-cards" >
                        {oponentSelected.Cards.map((_, i) => (
                                <img key={i} className="oponentsFight__Oponent-visual-cards--item" src="/assets/images/backCard.png" alt="card back" />
                        ))}
                        </div>
                    </div>
                ) : (
                    <img src="/assets/images/pokeballLoading.gif" className="loading" alt="loading"></img>
                )}
            </div>
          </div>
          <div className="oponentsFight__Board">
                <div className="oponentsFight__Board-top">
                    <div id="op01"></div>
                    <div id="op02"></div>
                    <div id="op03"></div>
                    <div id="op04"></div>
                    <div id="op05"></div>
                </div>
                <div className="oponentsFight__Board-bottom">
                    {["mine01", "mine02", "mine03", "mine04", "mine05"].map((slot) => {
                        const cardInSlot = occupiedSlots[slot];

                        return (
                            <div
                                key={slot}
                                id={slot}
                                className={`${cardInSlot ? "occupied" : selectedCard ? "possible" : ""}`}
                                onClick={() => handlePutCard(slot)}
                            >{cardInSlot && (
                                <img 
                                    src={cardInSlot.isShiny ? cardInSlot.imageShiny : cardInSlot.image} 
                                    alt={cardInSlot.name} 
                                    className="card-image"
                                />
                            )}
                            </div>
                        )
                        
                })}
                </div>
          </div>
           <div className="myCardsFight-container">
                {cards.filter(card => card.deck).map((card) => (
                    <li
                        id="myCard"
                        onClick={() => handleSelectedCard(card.id)} 
                        key={card.id}
                        className={`myCards__container__list__item card-type--${card.tipo[0]} ${selectedCard === card.id ? "selected" : ""}`}>
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
            </div>
      </>
    );
  }
  
  export default OponentsFight;