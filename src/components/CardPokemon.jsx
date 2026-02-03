
import './CardPokemon.scss';
import { useState } from 'react';
import iconAdd from '../assets/add.png'; 
import { Link } from "react-router-dom";

export function CardPokemon({ data, pokedex, setPokedex }) {
  const [flip, setFlip] = useState(false);
  const homeClick = (e) => {e.preventDefault();setFlip(!flip); }
  const handleAdd = (e) => {e.stopPropagation(); console.log("Ajout au pokedex");setPokedex([...pokedex, { id: data.id, name: data.name }]);}
  



  return (
    <article data-reverse={flip} onClick={homeClick}>
      <div className="cardInner"style={{ backgroundColor: getColorHexa(data.apiTypes[0].name),borderColor: getColorHexa(data.apiTypes[0].name) }}>
        <span className="addToPokedex" onClick={handleAdd}>
            <img src={iconAdd} alt="Ajouter" />
        </span>
        

        <figure className="cardFront">
          <picture>
            <img src={data.image} alt={data.name} title={data.name} />
          </picture>
          <figcaption>
            <span className="types">{data.apiTypes[0].name}</span>
            <h2>{data.name}</h2>
            <ol>
              <li>Points de vie : {data.stats.HP}</li>
              <li>Attaque : {data.stats.attack}</li>
              <li>Défense : {data.stats.defense}</li>
              <li>Attaque spécial : {data.stats.special_attack}</li>
              <li>Vitesse : {data.stats.speed}</li>
            </ol>
          </figcaption>
        </figure>
        <div className="cardBack">
          <Link to={`/pokemon/${data.id}`} className="btn-details">
            Voir plus
          </Link>
        </div>
      </div>
    </article>
  );
}


function getColorHexa(nameType) {
  let color;
  switch (nameType) {
    case 'Eau':
      color = '#5CB2DE';
      break;

    case 'Plante':
      color = '#2FA043';
      break;

    case 'Poison':
      color = '#D850C2';
      break;

    case 'Vol':
      color = '#738DDB';
      break;

    case 'Feu':
      color = '#FEA421';
      break;

    case 'Insecte':
      color = '#70B901';
      break;

    case 'Électrik':
      color = '#FFD244';
      break;

    case 'Sol':
      color = '#CD793F';
      break;

    case 'Fée':
      color = 'pink';
      break;

    case 'Combat':
      color = 'darkred';
      break;

    case 'Psy':
      color = '#FD6960';
      break;

    case 'Acier':
      color = '#246A79';
      break;

    case 'Glace':
      color = '#67D1C8';
      break;

    case 'Roche':
      color = '#CBB866';
      break;

    case 'Dragon':
      color = '#1C6ABB';
      break;

    default:
      color = 'grey';
      break;
  }

  return color;
}
export default CardPokemon;
