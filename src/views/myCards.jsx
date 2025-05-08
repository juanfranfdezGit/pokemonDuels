import PokemonCard from '../components/pokemonCard';
import { useEffect, useState, useContext  } from "react";
import { GameContext } from "../context/GameContext";
import Header from "../components/header";


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
    })

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
                    <ul className="myCards__container__list">
                        {filteredCards.map(card => {
							const myCard = myCards.flat().find(myCard => myCard.id === card.id);
							const isShiny = myCard ? myCard.isShiny : false;
							const attackFind = attack.find(a => a.Habilidad === card.Habilidad);

							return (
								<li key={card.id}>
									<PokemonCard 
										card={card}
										isShiny={isShiny} 
										attack={attackFind}
									/>
								</li>
                        	)
						})}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MyCards;