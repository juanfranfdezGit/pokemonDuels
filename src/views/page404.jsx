import { useNavigate } from "react-router-dom"

export default function Page404() {

    const Navigate = useNavigate();
    
    function navHome() {
        Navigate('/');
    }

    return (
        <>
            <div className="page404">
                <div>
                    <img className="page404__img" src="/assets/images/page404.png" alt="dective pikachu" />
                </div>
                <div>
                    <h1 className="page404__title">Oops! Página<br />no encontrada</h1>
                    <p className="page404__description">Parece que te has perdido en el camino. La página que buscas no existe o ha sido movida. ¡Regresa al menú principal o explora otras secciones!</p>
                    <button className="page404__button" onClick={navHome}>Inicio</button>
                </div> 
            </div>
        </>
    )
}