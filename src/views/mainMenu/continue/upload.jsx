import Header from "../../common/header";
import { useContext, useState } from "react";
import { GameContext } from '../../../context/GameContext';
import { useNavigate } from "react-router-dom";

export default function Upload() {

    const Navigate = useNavigate();
    const { updateUser } = useContext(GameContext);
    const [dragging, setDragging] = useState(false);

    const handleUpload = (file) => {        
        if (!file || file.type !== "application/json") {
            alert("El archivo debe ser un JSON válido.");
            return;
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const userData = JSON.parse(event.target.result);
                updateUser(userData);
                Navigate('/menu');
            } catch (error) {
                alert("Error al cargar el archivo. Asegúrate de que es un JSON válido.")
            }
        }
        reader.readAsText(file)
    }

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        handleUpload(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        handleUpload(file);
    };
    
    return (
        <>
            <Header></Header>

            <div className="upload">
                <form action="post" className="upload__form">
                    <div 
                        className={`upload__dropzone ${dragging ? "dragging" : ""}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >   
                    <p>Arrastra y suelta tu archivo JSON aquí</p>
                    <input 
                            type="file" 
                            id="userData" 
                            name="userData" 
                            onChange={handleFileSelect} 
                            accept="application/json"
                            hidden
                    />
                    <label htmlFor="userData" className="upload__button">Seleccionar Archivo</label>
                    </div>
                </form>
            </div>
        </>
    )
}