import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../src/pages/404.jsx";
import Details from "../src/pages/PokemonDetail.jsx";
import  MentionsLegales  from "../src/pages/MentionsLegals.jsx";
import Home from "../src/pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
      {
        path: "/mentions-legales",
        element: <MentionsLegales />,
      },
      {
        path: "/pokemon/:idPokemon",
        element: <Details />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

export default router;