import { useEffect, useState } from "react";
import Header from "../components/header";

function MyCards() {
    const [cards, setCards] = useState([]);
    const [attack, setAttacks] = useState([]);

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

    return (
        <>
            <section className="myCards">
                <Header></Header>

                <div className="myCards__container">
                    <ul className="myCards__container__list">
                        {cards.map((card) => (
                        <li 
                            key={card.id}
                            className={`myCards__container__list__item card-type--`+card.tipo[0]}>
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
            </section>
        </>
    )
}

export default MyCards;