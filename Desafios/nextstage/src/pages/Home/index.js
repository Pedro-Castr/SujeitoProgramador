import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./home.css";
import Hero from "../../components/Hero";
import Divider from "../../components/Divider";

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function loadGames() {
      try {
        const response = await api.get("/games", {
          params: {
            key: "2b081d046b334f76b1cf7b4b01845c4b",
            page_size: 10,
            ordering: "-rating",
            languages: "pt",
          },
        });
        setGames(response.data.results);
      } catch (error) {
        console.log("ERRO:", error);
      }
    }
    loadGames();
  }, []);

  console.log(games);
  return (
    <main className="home-container">
      <p>
        Descubra os jogos mais populares do momento, explore lançamentos
        incríveis e encontre sua próxima aventura. Do indie ao AAA, acompanhe
        avaliações, plataformas e detalhes dos títulos que estão dominando o
        mundo gamer.
      </p>

      <Hero games={games} />
      <Divider text={"Descubra nossos jogos mais bem avaliados!"} />

      <section className="games">
        {games.map((game) => {
          return (
            <div className="card" key={game.id}>
              <img src={game.background_image} alt="" />
              <h1>{game.name}</h1>
              <h3>Nota: {game.rating}</h3>
              <Link to={`/game/${game.id}`}>Detalhes</Link>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Home;
