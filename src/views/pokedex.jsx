import { useEffect, useState } from "react";
import Header from "../components/header";

function Pokedex() {
    const [cards, setCards] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
      fetch("/services/pokedex.json")
        .then((res) => res.json())
        .then((data) => {
            setCards(data); 
            if (data.length > 0) {
              setSelectedPokemon(data[0]);
            }
        })
        .catch((error) => console.error("Error cargando JSON:", error));
    }, []);

    function selectPokemon(pokemon) {
        setSelectedPokemon(pokemon) 
    }

    return (
        <>
            <section className="pokedex">
                <Header></Header>

                <div className="pokedex__pokemons">
                    <div className="pokedex__pokemons__selected">
                        {selectedPokemon ? (
                            <div className="pokedex__pokemons__selected-info">
                                <div className="pokedex__pokemons__selected-info-data01">
                                    <p className="pokedex__pokemons__selected-info--id">N.º {selectedPokemon.id.toString().padStart(4, '0')}</p>
                                    <p className="pokedex__pokemons__selected-info--name">-</p>
                                    <p className="pokedex__pokemons__selected-info--name">{selectedPokemon.name}</p>
                                </div>
                                <div className="pokedex__pokemons__selected-info-data02">
                                    <div className="pokedex__pokemons__selected-info-imageContainer">
                                        <img className="pokedex__pokemons__selected-info-imageContainer-img" src={selectedPokemon.image} alt={selectedPokemon.name+` image`} />
                                    </div>
                                    <div className="pokedex__pokemons__selected-info-dataTable">
                                        <div className="pokedex__pokemons__selected-info--descriptionContainer">
                                            <p className="pokedex__pokemons__selected-info--description">{selectedPokemon.description}</p>
                                        </div>
                                        <div>
                                            <p className="pokedex__pokemons__selected-info--label">Altura:</p>
                                            <p className="pokedex__pokemons__selected-info--data">{selectedPokemon.altura}m</p>
                                        </div>
                                        <div>
                                            <p className="pokedex__pokemons__selected-info--label">Peso:</p>
                                            <p className="pokedex__pokemons__selected-info--data">{selectedPokemon.peso}kg</p>
                                        </div>
                                        <div>
                                            <p className="pokedex__pokemons__selected-info--label">Categoría:</p>
                                            <p className="pokedex__pokemons__selected-info--data">{selectedPokemon.categoría}</p>
                                        </div>
                                        <div>
                                            <p className="pokedex__pokemons__selected-info--label">Habilidad:</p>
                                            <p className="pokedex__pokemons__selected-info--data 
                                            pokedex__pokemons__selected-info--data-move">{selectedPokemon.Habilidad} <span>?</span></p>
                                        </div>         
                                    </div>
                                </div>
                                <div className="pokedex__pokemons__selected-info-data03">
                                    <div className="pokedex__pokemons__selected-info-typeContainer">
                                        <p className="pokedex-type-title">Tipo:</p>
                                        {selectedPokemon.tipo.map((type, index) => (
                                            <p key={index} className={`pokedex-type pokedex-type--`+type}>{type}</p>
                                        ))}
                                    </div>
                                    <div className="pokedex__pokemons__selected-info-weaknessContainer">
                                        <p className="pokedex-type-title">Debilidad:</p>
                                        {selectedPokemon.debilidad.map((weakness, index) => (
                                            <p key={index} className={`pokedex-type pokedex-type--`+weakness}>{weakness}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <img className="pokedex__pokemons__selected-loading" src="/assets/images/pokemons/pokeballLoading.gif" alt="loading" />
                        )}
                    </div>

                    <ul className="pokedex__pokemons__list">
                        {cards.map((card) => (
                        <li 
                            onClick={() => selectPokemon(card)} 
                            key={card.id}
                            className="pokedex__pokemons__list__item">
                            <div className="pokedex__pokemons__list__item-imgContainer">
                                <img className="pokedex__pokemons__list__item-image" src={card.image} alt={card.name+` image`} />
                            </div>
                            <p className="pokedex__pokemons__list__item-id">N.º {card.id.toString().padStart(4, '0')}</p>
                            <p className="pokedex__pokemons__list__item-name">{card.name}</p>
                            {card.tipo.map((type, index) => (
                                <p key={index} className={`pokedex-type pokedex-type--`+type}>{type}</p>
                            ))}
                        </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Pokedex;