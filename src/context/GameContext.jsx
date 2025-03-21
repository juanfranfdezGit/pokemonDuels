import { createContext, useEffect, useState } from "react";
import { getUserData, saveUserData } from "../tools/gameDB";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

    useEffect(() => {
        const userId = "user123"; 
        
        getUserData(userId)
            .then((fetchedUser) => {
                if (fetchedUser) {
                    setUser(fetchedUser);
                }  else {
                    setUser(null);
                }
                setLoading(false)
            })
            .catch((err) => {
                console.error("Error al obtener los datos del usuario:", err);
                setError("No se pudo cargar el usuario.");
                setLoading(false); 
            });
        }, []);

    const createNewUser = async (newUserData) => {
        try {
          await saveUserData(newUserData); 
          setUser(newUserData); 
        } catch (err) {
          console.error("Error al crear el nuevo usuario:", err);
          setError("No se pudo guardar la información del nuevo usuario.");
        }
    };

    const updateUser = async (newUserData) => {
        try {
        await saveUserData(newUserData);
        setUser(newUserData);
        } catch (err) {
        console.error("Error al guardar los datos del usuario:", err);
        setError("No se pudo guardar la información del usuario.");
        }
    };

    if (loading) {
        return <div><img className="loading" src="/assets/images/pokeballLoading.gif" alt="pokeball loading" /></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <GameContext.Provider value={{ user, createNewUser, updateUser }}>
            {children}
        </GameContext.Provider>
    );
}