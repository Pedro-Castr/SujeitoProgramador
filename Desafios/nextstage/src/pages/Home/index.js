import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./home.css";
import Hero from "../../components/Hero";
import Divider from "../../components/Divider";

function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGames() {
      try {
        const response = await api.get("/games", {
          params: {
            key: "2b081d046b334f76b1cf7b4b01845c4b",
            page_size: 10,
            ordering: "-metacritc",
            languages: "pt",
          },
        });
        setGames(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log("ERRO:", error);
      }
    }
    loadGames();
  }, []);

  function getCorNota(nota) {
    if (nota) {
      if (nota >= 4.7) {
        return "#00A8E1";
      } else if (nota >= 4.5) {
        return "#2E8B57";
      } else if (nota >= 3.5) {
        return "#6FCF97";
      } else if (nota >= 3) {
        return "#F2C94C";
      } else {
        return "#EB5757";
      }
    }
  }

  console.log(games);

  if (loading) {
    return (
      <div className="loading">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <main className="home-container">
      <p>
        “Discover the most popular games of the moment, explore incredible new
        releases, and find your next adventure. From indie to AAA, follow
        ratings, platforms, and details about the titles dominating the gaming
        world.”
      </p>

      <Hero games={games} />
      <Divider text={"See our best rating games!"} />

      <section className="games">
        {games.map((game) => {
          return (
            <div className="card" key={game.id}>
              <img src={game.background_image} alt="" />
              <h1>{game.name}</h1>
              <h3 style={{ backgroundColor: getCorNota(game.rating) }}>
                metacritc: {game.rating}
              </h3>
              <Link to={`/game/${game.id}`}>See more</Link>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Home;
