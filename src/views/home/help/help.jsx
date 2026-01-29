import Header from "../../common/header";

function Help() {

  return (
    <>
      <Header />
      <section className="help flex">
        <h1 className="help__title">Guía de uso de la App</h1>
        
        <h2 className="help__index primary">Indice</h2>
        <ul className="help__index__list">
          <li className="help__index__list-item"><a href="#begin">Como Empezar</a></li>
          <li className="help__index__list-item"><a href="#save">Guardar Datos y Cargar Usuario</a></li>
          <li className="help__index__list-item"><a href="#pokedex">Consultar la Pokédex</a></li>
          <li className="help__index__list-item"><a href="#open">Abrir Sobres</a></li>
          <li className="help__index__list-item"><a href="#colection">Ver Cartas Coleccionadas</a></li>
        </ul>

        <h2 className="help__index" id="begin">Como Empezar</h2>
        <p className="help__index-description">Para comenzar a usar la app, sigue estos pasos:</p>
        <ol className="help__index__list">
          <li className="help__index__list-item">En el menú inicial, selecciona "Crear Usuario".</li>
          <li className="help__index__list-item">Rellena el formulario con tus datos.</li>
          <li className="help__index__list-item">Una vez completado, tu información se guardará automáticamente en la base de datos.</li>
          <li className="help__index__list-item">Accederás directamente a la app y podrás empezar a explorar sus funciones.</li>
        </ol>

        <h2 className="help__index" id="save">Guardar Datos y Cargar Usuario</h2>
        <p className="help__index-description">La app guarda los datos del usuario en la caché del navegador. Sin embargo, si borras la caché, 
          podrías perder tu progreso. Para evitarlo, sigue estos pasos:</p>
        <h3 className="help__index primary">1. Guardar Datos.</h3>
        <ol className="help__index__list">
          <li className="help__index__list-item">Accede a la tienda o a la sección "Mis Cartas".</li>
          <li className="help__index__list-item">En la parte superior derecha, verás tu información de usuario.</li>
          <li className="help__index__list-item">Haz clic sobre ella y selecciona la opción para guardar los datos en un archivo local en tu dispositivo.</li>
        </ol>
        <h3 className="help__index primary">2. Cargar Datos.</h3>
        <ol className="help__index__list">
          <li className="help__index__list-item">Si has borrado la caché del navegador, ve al menú inicial y selecciona "Cargar Datos".</li>
          <li className="help__index__list-item">Sube el archivo guardado previamente o arrástralo al área designada.</li>
          <li className="help__index__list-item">Una vez cargado, accederás automáticamente al menú principal y recuperarás todo tu progreso.</li>
        </ol>

        <h2 className="help__index" id="pokedex">Consultar Pokédex</h2>
        <p className="help__index-description">Dentro de la app, puedes consultar la Pokédex, donde encontrarás información detallada sobre todos los Pokémon disponibles en la 
          aplicación. Para acceder a ella, simplemente selecciona la opción "Pokédex" desde el menú principal. Allí podrás ver los datos de 
          cada Pokémon, como su nombre, tipo, habilidades y estadísticas.
        </p>

        <h2 className="help__index" id="open">Abrir Sobres</h2>
        <p className="help__index-description">En esta sección, puedes conseguir nuevas cartas para tu colección. Sigue estos pasos para abrir un sobre:</p>
        <ol className="help__index__list">
          <li className="help__index__list-item">Accede al menú principal y selecciona "Tienda".</li> 
          <li className="help__index__list-item">Dentro de tienda selecciona "Abrir Sobres".</li>
          <li className="help__index__list-item">Se generará un sobre con cartas aleatorias. Selecciona uno de ellos.</li>
          <li className="help__index__list-item">Las cartas nuevas se añadirán automáticamente a tu colección en la sección "Mis Cartas".</li>
          <li className="help__index__list-item">Podrás seguir abriendo sobres o ir a "Mis Cartas" para ver tu colección completa.</li>
        </ol>

        <h2 className="help__index" id="colection">Ver Cartas Coleccionadas</h2>
        <p className="help__index-description">En esta sección puedes ver todas las cartas que has obtenido al abrir sobres. Para acceder a tu colección, sigue estos pasos:</p>
        <ol className="help__index__list">
          <li className="help__index__list-item">Ve al menú principal y selecciona "Mis Cartas".</li>
          <li className="help__index__list-item">Se mostrará una lista con todas las cartas que has coleccionado.</li>
        </ol>
        <p className="help__index-description">¡Explora y disfruta viendo tu colección de cartas!</p>
      </section>
    </>
  );
}
  
  export default Help;