
// He importado aquí el SCSS, al aplicar sólo en este componente: 
import '../scss/_pokemonCard.scss'

function PokemonCard({ card, isShiny = false, attack }) {
  return (
    <article
      className={`pokemonCard card-type--` + card.tipo[0]}
    >
      <div className="pokemonCard-nameContainer">
        <p className="pokemonCard-name">{card.name}</p>
        <p className="pokemonCard-PS">
          <span>PS</span>
          {card.stats[0].toString().padEnd(2, "0")}
        </p>
      </div>
      <div
        className={
          `pokemonCard-imgContainer pokemonCard-imgContainer--` +
          card.tipo[0]
        }
      >
        <img
          className="pokemonCard-image"
          src={isShiny ? card.imageShiny : card.image}
          alt={card.name + ` image`}
        />
        <img
          className="pokemonCard-back"
          src="/assets/images/brillo.png"
          alt={card.name + ` image`}
        />
        <div className="cards-typeContainer">
          {card.tipo.map((type, index) => (
            <p key={index} className={`cards-type pokedex-type--` + type}>
              {type}
            </p>
          ))}
        </div>
      </div>
      <p className="pokemonCard-description">
        {card.description}
      </p>
      <div className="pokemonCard-abilityContainer">
        <p className="pokemonCard-ability">
          {card.Habilidad} <span>?</span>
        </p>
        {attack ? (
          <p className="pokemonCard-PH">
            <span>PH:</span> {attack.PH}
          </p>
        ) : (
          "Ataque no encontrado"
        )}
      </div>
    </article>
  );
}

export default PokemonCard;
