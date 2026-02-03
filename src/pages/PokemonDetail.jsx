import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import CardPokemon from "../components/CardPokemon.jsx"; 


function PokemonDetail() {
  const { idPokemon } = useParams(); 
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${idPokemon}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [idPokemon]);



  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <CardPokemon data={pokemon} pokedex={[]} setPokedex={() => {}} />
    </div>
  );
}

export default PokemonDetail;