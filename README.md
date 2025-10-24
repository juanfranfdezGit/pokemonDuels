
# Pokémon Duels

Bienvenido a Pokémon Duels! Un juego de cartas inspirado en el universo Pokémon, creado con React, SASS y utilizando JSON como API para obtener datos dinámicos sobre los Pokémon. Este proyecto es fan-made, sin fines comerciales y con fines educativos, desarrollado para practicar y mejorar mis habilidades en programación con JavaScript, React y el uso de APIs. No está asociado con Nintendo ni con The Pokémon Company, y todos los derechos de los personajes y marcas de Pokémon pertenecen a sus respectivos propietarios.

## Características del Proyecto 🔧

- **Interfaz de usuario**: Diseño atractivo y funcional creado con **React** y **SASS**.
- **JSON API**: Consumo de un archivo JSON para obtener información dinámica sobre los Pokémon, incluyendo sus características, habilidades y ataques.
- **Cartas coleccionables**: El juego te permite coleccionar cartas de Pokémon con la posibilidad de que sean Shiny.
- **Ataques**: Cada carta de Pokémon tiene habilidades y ataques especiales que se muestran junto con sus estadísticas.

## Estado Actual
Actualmente, el sistema cuenta con 28 Pokémon disponibles en el JSON, aunque se planea ampliar esta cantidad próximamente. Además, ya está implementado el contexto de usuario, que incluye información como tu nombre, cartas y foto de perfil. También se encuentra disponible una tienda donde puedes abrir sobres, y los sobres se guardan en tu estado personal.

Estoy trabajando en la creación de cuentas de usuario y en el sistema de guardado de estado para mejorar la experiencia general. Una vez completados estos elementos, procederé con la optimización para dispositivos móviles (responsive) y, tras ello, lanzaré una primera versión.

Esta versión inicial incluirá las funciones básicas, como la tienda para abrir sobres, pero aún no tendrá combates ni dinero en la tienda. Además, la cantidad de Pokémon será limitada en esta primera fase.

## Cómo Empezar 🚀

### Requisitos

- **Node.js**: Asegúrate de tener [Node.js](https://nodejs.org) instalado en tu máquina.
- **NPM** o **Yarn**: Necesitarás un gestor de paquetes para instalar las dependencias.

### Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/pokemon-duels.git
    ```

2. Navega a la carpeta del proyecto:
    ```bash
    cd pokemon-duels
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```
    o si prefieres usar **Yarn**:
    ```bash
    yarn install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    npm start
    ```
    o con **Yarn**:
    ```bash
    yarn start
    ```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

### Contribuciones 💻
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.

2. Crea tu branch:
```bash
git checkout -b mi-feature
```

3. Realiza los cambios y haz un commit:
```bash
git commit -m "Descripción de los cambios"
```
4. Sube tus cambios:
```bash
git push origin mi-feature
```

5. Abre un pull request con una descripción clara de los cambios.
