import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./style.css";
import "./normalize.css";
import pokemonLogo from './assets/pokemon.png';
import Home from './pages/Home.jsx';
import PokemonDetail from './pages/PokemonDetail.jsx';
import MentionsLegales from './pages/MentionsLegals.jsx';
import Error404 from './pages/404.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <header style={{textAlign: 'center'}}>
        <h1>
          <Link to="/">
            <img src={pokemonLogo} alt="pokemon logo" />
          </Link>
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:idPokemon" element={<PokemonDetail />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;