import { useNavigate } from "react-router-dom";

function ShopButton() {
    const Navigate = useNavigate();
    
    function navShop() {
        Navigate('/shop')
    }

    return (
        <button className="shop__button" onClick={navShop}>Obtener Cartas</button>
    )
}

export default ShopButton;