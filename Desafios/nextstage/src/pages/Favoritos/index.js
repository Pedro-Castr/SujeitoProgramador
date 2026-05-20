import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./favoritos.css";

function Favoritos() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const savedGames = localStorage.getItem("@nextstage");
    setGames(JSON.parse(savedGames) || []);
  }, []);

  function deleteGame(id) {
    let gamesFiltered = games.filter((item) => {
      return item.id !== id;
    });

    setGames(gamesFiltered);
    localStorage.setItem("@nextstage", JSON.stringify(gamesFiltered));
    toast.success("game removed");
  }

  if (games <= 0) {
    return (
      <div className="container-favoritos">
        <p className="empty-list">
          You don’t have any saved games yet. Explore new titles and start
          building your personal collection of favorite adventures!
        </p>
      </div>
    );
  }

  return (
    <div className="container-favoritos">
      <h1>Your saved games</h1>

      <p>
        Save your favorite games and build your personal collection. Access your
        selected titles anytime and keep track of the adventures you never want
        to forget.
      </p>

      <ul>
        {games.map((game) => {
          return (
            <li
              key={game.id}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                url(${game.background_image})`,
              }}
            >
              <h2>{game.name}</h2>
              <div className="buttons">
                <Link to={`/game/${game.id}`}>Details</Link>
                <button onClick={() => deleteGame(game.id)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
