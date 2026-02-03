import { useState, useEffect } from 'react';
import "./style.css";
import "./normalize.css";
import pokemonLogo from './assets/pokemon.png';
import CardPokemon from './components/CardPokemon.jsx';
import Sidebar from "./components/Sidebar.jsx";
import chargement from './assets/giphy.gif';

function App() {

  const [pokedex, setPokedex] = useState([]);
  const [dataPokemon, setDataPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const resetPokedex = () => { setPokedex([]); };
  useEffect(() => { console.log(`Le Pokédex possède ${pokedex.length} Pokémons`); }, [pokedex]);
  useEffect(() => {fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1").then((response) =>
    response.json()).then((data) => { setDataPokemon(data); setIsLoading(false); })
    .catch((err) => { console.log(err.message); setIsLoading(false); });}, []);


  return (
    <>
      <h1>
        <img src={pokemonLogo} alt="pokemon logo" />
      </h1>
      {isLoading ? (
        <div className="loading" style={{ textAlign: "center", width: "100%", color: "white" }}>
          <img src={chargement} alt="chargement" style={{ width: "100px", height: "100px" }} />
        </div>
      ) : (
        <div className="lmj-layout-inner">
          <Sidebar pokedex={pokedex} resetPokedex={resetPokedex} />
          <main>
            <div className="cards-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {dataPokemon.map((poke, index) => (
                <CardPokemon 
                    key={index} 
                    data={poke} 
                    pokedex={pokedex} 
                    setPokedex={setPokedex} 
                />
              ))}
            </div>
          </main>
        </div>
      )}
    </>  
  );
}

export default App;