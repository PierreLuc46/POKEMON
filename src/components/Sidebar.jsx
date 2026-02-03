import { useState } from 'react';
import pokeball from '../assets/9901.gif';
import './Sidebar.scss';

function Sidebar({ pokedex }) {
 
  const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return isOpen ? (
    <div className="lmj-cart">
      <button className="lmj-cart-toggle-button" onClick={toggleSidebar}>
        X
      </button>
      
      <h2>
        <img src={pokeball} alt="pokeball" style={{ width: "10px", height: "10px" }} />
        <p>Pokédex ({pokedex.length})</p>
      </h2>
  
      {pokedex.length > 0 ? (
        <ul>
            {pokedex.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
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

export default Sidebar