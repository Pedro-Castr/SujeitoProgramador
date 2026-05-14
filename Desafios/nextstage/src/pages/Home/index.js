import { useEffect, useState } from "react";
import api from "../../services/api";
import "./home.css";
import Hero from "../../components/Hero";

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
    </main>
  );
}

export default Home;
