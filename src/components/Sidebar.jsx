import { useState } from 'react';
import pokeball from '../assets/pokeball.png';
import './Sidebar.scss';

function Sidebar({ pokedex, setPokedex }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const removePokemon = (idToDelete) => {
    const newPokedex = pokedex.filter(pokemon => pokemon.id !== idToDelete);
    setPokedex(newPokedex);
  }

  return isOpen ? (
    <div className="lmj-cart">
      <button className="lmj-cart-toggle-button" onClick={toggleSidebar}>
        X
      </button>

      <h2>
        <img src={pokeball} alt="pokeball" />
        <p>Pokédex ({pokedex.length})</p>
      </h2>

      {pokedex.length > 0 ? (
        <ul>
          {pokedex.map((pokemon, index) => (
            <li
              key={index}
              onClick={() => removePokemon(pokemon.id)}
              style={{ cursor: 'pointer', marginBottom: '5px' }}
              title="Cliquez pour relâcher ce Pokémon"
            >
              x {pokemon.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>Votre Pokédex est vide</div>
      )}

    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button className="lmj-cart-toggle-button" onClick={toggleSidebar}>
        <img src={pokeball} alt="pokeball" />
        <p>Pokédex ({pokedex.length})</p>
      </button>
    </div>
  )
}

export default Sidebar;