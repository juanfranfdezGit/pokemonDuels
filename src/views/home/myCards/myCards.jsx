import { useEffect, useState, useContext  } from "react";
import { GameContext } from "../../../context/GameContext";
import Header from "../../common/header";


function MyCards() {
    const { user } = useContext(GameContext);
    const [cards, setCards] = useState([]);
    const [myCards,setMyCards] = useState();
    const [attack, setAttacks] = useState([]);


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

    useEffect(() => {
        setMyCards(user.cards);
    }, [user.cards])

    console.log("Cartas filtradas:", cards.filter(card => myCards.flat().map(myCard => myCard.id).includes(card.id)));

    if (!user) {
        return <div><img className="loading" src="/assets/images/pokeballLoading.gif" alt="loading" /></div>;
    }

    const filteredCards = cards.filter(card => 
        myCards.some(myCardArray => myCardArray.some(myCard => myCard.id === card.id))
    );

    return (
        <>
            <section className="myCards">
                <Header></Header>

                <div className="myCards__container">
                    <ul className="myCards__container__list flex">
                        {filteredCards.map(card => {
                           
                        const myCard = myCards.flat().find(myCard => myCard.id === card.id);
                        const isShiny = myCard ? myCard.isShiny : false;

                        return (
                        <li 
                            key={card.id}
                            className={`myCards__container__list__item card-type--`+card.tipo[0]}>
                            <div className="myCards__container__list__item-nameContainer flex">
                                <p className="myCards__container__list__item-name">{card.name}</p>
                                <p className="myCards__container__list__item-PS"><span>PS</span>{card.stats[0].toString().padEnd(2, '0')}</p>
                            </div>
                            <div className={`myCards__container__list__item-imgContainer myCards__container__list__item-imgContainer--`+card.tipo[0]}>
                                <img className="myCards__container__list__item-image" src={isShiny ? card.imageShiny : card.image} alt={card.name+` image`} />
                                <img className="myCards__container__list__item-back" src="/assets/images/brillo.png" alt={card.name+` image`} />
                                <div className="cards-typeContainer flex">
                                    {card.tipo.map((type, index) => (
                                            <p key={index} className={`cards-type pokedex-type--`+type}>{type}</p>
                                    ))}
                                </div>
                            </div>
                            <p className="myCards__container__list__item-description">{card.description}</p>
                            <div className="myCards__container__list__item-habilityContainer flex">
                                <p className="myCards__container__list__item-hability flex">{card.Habilidad} <span>?</span></p>
                                {(() => {
                                    const attackFind = attack.find(a => a.Habilidad === card.Habilidad);
                                    return attackFind ? <p className="myCards__container__list__item-PH"><span className="flex">PH:</span> {attackFind.PH}</p> : "Ataque no encontrado";
                                })()}
                            </div>
                        </li>
                        )})}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MyCards;