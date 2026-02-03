import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CardPokemon } from "../components/CardPokemon.jsx";

function PokemonDetail() {
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${idPokemon}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch(err => console.error(err));
  }, [idPokemon]);
  if (!pokemon) return <div style={{color: 'white', textAlign: 'center'}}>Chargement...</div>;
  return (
    <div className="detail-container" style={{ textAlign: "center", padding: "50px" }}>
      <div style={{ marginBottom: "30px" }}>
        <Link to="/" style={{ color: "#ffcc01", textDecoration: "none", fontSize: "1.2rem" }}>
           Retour à l'accueil
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardPokemon 
            data={pokemon} 
            pokedex={[]} 
            setPokedex={() => {}} 
        />
      </div>

    </div>
  );
}

export default PokemonDetail;