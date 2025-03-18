import { useNavigate, useLocation} from "react-router-dom";

function BackButton() {
    const Navigate = useNavigate();
    const location = useLocation();
    let { pathname } = location;

    if (pathname.startsWith('/')) {
        pathname = pathname.substring(1);
    }

    let pageTitle;

    if (pathname === "pokedex") {
        pageTitle = "Pokédex";
    } else if (pathname === "myCards") {
        pageTitle = "Mis Cartas";
    } else if (pathname === "shop") {
        pageTitle = "Tienda";
    } else if (pathname === "oponents") {
        pageTitle = "Oponentes";
    }
    
    function navMainMenu() {
        Navigate('/')
    }

    return (
        <>
            <header className="header">
                <button className="back__button" onClick={navMainMenu}><img src="/assets/logos/arrowBack.png" alt="back button" />Menú Principal</button>
                <h2 className="pages__title">{pageTitle}</h2>
            </header>
        </>  
    )
}

export default BackButton;