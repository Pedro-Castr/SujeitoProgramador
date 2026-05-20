import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./game.css";

function Game() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGame() {
      await api
        .get(`games/${id}`, {
          params: {
            key: "2b081d046b334f76b1cf7b4b01845c4b",
          },
        })
        .then((response) => {
          setGame(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }

    loadGame();
  }, [navigate, id]);

  function handleFavorite() {
    const myList = localStorage.getItem("@nextstage");

    let savedGames = JSON.parse(myList) || [];

    const hasGame = savedGames.some((savedGame) => savedGame.id === game.id);

    if (hasGame) {
      toast.warn("This game is already in your list");
      return;
    }

    savedGames.push(game);
    localStorage.setItem("@nextstage", JSON.stringify(savedGames));
    toast.success("game saved!");
  }

  console.log(game);

  if (loading) {
    return (
      <div className="loading">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="card-game">
      <h2>{game.name}</h2>
      <img src={game.background_image_additional} alt="" />
      <div
        className="detalhes"
        dangerouslySetInnerHTML={{
          __html: game.description,
        }}
      ></div>
      <div className="produtores">
        <span>Developed by:</span>
        {game.publishers.map((produtora) => {
          return <span>{produtora.name}</span>;
        })}
      </div>
      <div className="btn-area">
        <a href={game.website} target="_blank" rel="noreferrer">
          Website
        </a>
        <a href={game.metacritic_url} target="_blank" rel="noreferrer">
          Metacritic
        </a>
        <button onClick={handleFavorite} className="favorite">
          Add to favorites
        </button>
      </div>
    </div>
  );
}

export default Game;
