import { useNavigate } from "react-router-dom";

function MyCardsButton() {
    const Navigate = useNavigate();
    
    function navMyCards() {
        Navigate('/myCards')
    }

    return (
        <button className="cards__button" onClick={navMyCards}>Mis Cartas</button>
    )
}

export default MyCardsButton;