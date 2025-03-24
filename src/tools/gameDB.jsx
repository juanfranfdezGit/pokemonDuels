export function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("gameDB", 1);

        request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("users")) {
            db.createObjectStore("users", { keyPath: "id" });
        }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject("Error al abrir la base de datos");
    });
}

export async function saveUserData(user) {
    const db = await openDB();
    const tx = db.transaction("users", "readwrite");
    const store = tx.objectStore("users");

    store.put(user);  
    return tx.complete; 
}

export async function getUserData(userId) {
    const db = await openDB();
    const tx = db.transaction("users", "readonly");
    const store = tx.objectStore("users");

    return new Promise((resolve, reject) => {
        const request = store.get(userId);
        request.onsuccess = () => resolve(request.result); 
        request.onerror = () => reject("Error al obtener los datos del usuario");
    });
}

export async function deleteUserData(userId) {
    const db = await openDB();
    const tx = db.transaction("users", "readwrite");
    const store = tx.objectStore("users");

    return new Promise((resolve, reject) => {
        const request = store.delete(userId);
        request.onsuccess = () => resolve(); 
        request.onerror = () => reject("Error al eliminar los datos del usuario");
    });
}