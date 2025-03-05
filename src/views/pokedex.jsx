import { useEffect, useState } from "react";

function Pokedex() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
      fetch("/services/pokedex.json")
        .then((res) => res.json())
        .then((data) => setCards(data))
        .catch((error) => console.error("Error cargando JSON:", error));
    }, []);

    return (
        <>
            <section>
                <h2>Pokedex</h2>
                <ul>
                    {cards.map((card) => (
                    <li key={card.id}><img src={card.image} alt="" />{card.name} - Poder: {card.stats}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Pokedex;