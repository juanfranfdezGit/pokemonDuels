import BackButton from "../components/backButton";
import MyCardsButton from "../components/myCardsButton";
import ShopButton from "../components/shopButton";
import { useEffect, useState } from "react";

function Oponents() {
    const [oponentCards, setoponentCards] = useState([]);

    useEffect(() => {
      fetch("/services/oponents.json")
        .then((res) => res.json())
        .then((data) => {setoponentCards(data);})
        .catch((error) => console.error("Error cargando JSON:", error));
    }, []);

    return (
      <>
          <div className="oponents">
            <div className="oponents__menu">
                <ul className="oponents__menu__list">
                    <BackButton></BackButton>
                    <MyCardsButton></MyCardsButton>
                    <ShopButton></ShopButton>
                </ul>
            </div>
            <div className="oponents__oponentsList-container">
                <ul className="oponents__oponentsList">
                    {oponentCards.map((oponent) => (
                        <li key={oponent.id} className="oponents__oponentsList-item">
                            <p className="oponents__oponentsList-item--name">{oponent.name} </p>
                            <p className="oponents__oponentsList-item--difficulty">{oponent.difficulty} </p>
                            <div className="oponents__oponentsList-item--img">
                                <img src={oponent.img} alt={oponent.name} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
      </>
    );
  }
  
  export default Oponents;