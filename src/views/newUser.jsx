import Header from '../components/header'
import { useState } from "react";
import { saveUserData } from "../tools/gameDB";
import { useNavigate } from 'react-router-dom';

function NewUser() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [imgError, setImgError] = useState(false);

    const Navigate = useNavigate();

    const handleImageChange = (imageName) => {
        setSelectedImage(imageName);
        setImgError(false);
    };
    
    const handleUsernameChange = (e) => {
        const newUsername = e.target.value;
        setUsername(newUsername);
    
        if (usernamePattern.test(newUsername)) {
            setUsernameError(false); 
        } else {
            setUsernameError(true); 
        }
    };

    let usernamePattern = /^[a-zA-Z0-9]{4,10}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!usernamePattern.test(username)) {
            setUsernameError(true);
        }

        if (!selectedImage) {
            setImgError(true);
        }

        const newUser = {
            id: "user1",
            username: username,
            selectedImage: selectedImage,
            money: 1000,
            cards: []
        };

        if (usernamePattern.test(username) && selectedImage) {
            try {
                await saveUserData(newUser);
                setUsername(""); 
                setSelectedImage(null);
                Navigate("/")
            } catch (err) {
                console.error("Error al crear el usuario:", err);
                alert("Hubo un problema al guardar el usuario.");
            }
        }
    };

    return (
        <>
            <Header></Header>

            <div className='formContainer'>
                <form onSubmit={handleSubmit} action="post" className='form'>
                    <div className='form__item'>
                        <div className='form__item__imgContainer'>
                            <input
                                className={`form__item__imgContainer-input ${selectedImage === "user01" ? "selected" : ""}`}
                                checked={selectedImage === "user01"}
                                type="radio"
                                id="user01"
                                name="userImage"
                                onChange={() => handleImageChange('user01')}
                            />
                            <span className='form__item__imgContainer-input--view'></span>
                        </div>
                        <div className='form__item__imgContainer'>
                            <input
                                className={`form__item__imgContainer-input ${selectedImage === "user02" ? "selected" : ""}`}
                                checked={selectedImage === "user02"}
                                type="radio"
                                id="user02"
                                name="userImage"
                                onChange={() => handleImageChange('user02')}
                            />
                            <span className='form__item__imgContainer-input--view'></span>
                        </div>
                        <div className='form__item__imgContainer'>
                            <input
                                className={`form__item__imgContainer-input ${selectedImage === "user03" ? "selected" : ""}`}
                                checked={selectedImage === "user03"}
                                type="radio"
                                id="user03"
                                name="userImage"
                                onChange={() => handleImageChange('user03')}
                            />
                            <span className='form__item__imgContainer-input--view'></span>
                        </div>
                        <p className={`errorMessage errorImg ${imgError ? "allow" : "disallow"}`}>Por favor, selecciona una imagen</p>
                    </div>
                    <div className='form__item'>
                        <label className='form__item-username--label' htmlFor="username">Usuario</label>
                        <input className='form__item-username' type="text" value={username}  id='username' onChange={handleUsernameChange} />
                        <p className={`errorMessage ${usernameError ? "allow" : "disallow"}`}>Elija un nombre de usuario de entre 4 y 10 caracteres</p>
                    </div>
                    <div className='form__item'>
                        <input className='form__item-submit' type="submit" onChange={handleSubmit} value="Crear Usuario" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewUser;