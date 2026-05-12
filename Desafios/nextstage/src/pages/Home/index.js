import { useEffect, useState } from "react";
import api from "../../services/api";

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
  return <div></div>;
}

export default Home;
