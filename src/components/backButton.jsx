import { useNavigate } from "react-router-dom";

function BackButton() {
    const Navigate = useNavigate();
    
    function navMainMenu() {
        Navigate('/')
    }

    return (
        <button className="back__button" onClick={navMainMenu}><img src="/assets/logos/arrowBack.png" alt="back button" />Volver</button>
    )
}

export default BackButton;