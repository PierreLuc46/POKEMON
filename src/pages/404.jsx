import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div style={{textAlign: "center", color: "white", marginTop: "50px"}}>
            <h1>404 - Oups !</h1>
            <p>Ce Pokémon n'existe pas...</p>
            <Link to="/" style={{color: "#ffcc01"}}>Retour à l'accueil</Link>
        </div>
    )
}