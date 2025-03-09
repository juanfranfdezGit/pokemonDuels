import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyCards() {
    const Navigate = useNavigate();
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

    function navMainMenu() {
        Navigate('/')
    }

    return (
        <>
            <section className="pokedex">
                <h2 className="pokedex__title">Mis Cartas</h2>
                <button className="pokedex__button" onClick={navMainMenu}><img src="/assets/logos/arrowBack.png" />Volver</button>

                <div className="pokedex__pokemons">
                    <ul className="pokedex__pokemons__list">
                        {cards.map((card) => (
                        <li 
                            key={card.id}
                            className="pokedex__pokemons__list__item">
                            <div>
                                <p className="pokedex__pokemons__list__item-name">{card.name}</p>
                                <p className="pokedex__pokemons__list__item-name">{card.stats[0].toString().padEnd(2, '0')}</p>
                            </div>
                            <div className="pokedex__pokemons__list__item-imgContainer">
                                <img className="pokedex__pokemons__list__item-image" src={card.isShiny ? card.imageShiny : card.image} alt={card.name+` image`} />
                                <div>
                                    {card.tipo.map((type, index) => (
                                        <p key={index} className={`pokedex-type pokedex-type--`+type}>{type}</p>
                                    ))}
                                </div>
                            </div>
                            <p className="pokedex__pokemons__list__item-id">{card.description}</p>
                            <p>{card.Habilidad}</p>
                            {attack.find}
                        </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MyCards;