import { useEffect, useState } from "react";
import "./hero.css";

function Hero({ games }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === games.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [games]);

  if (!games.length) {
    return null;
  }

  const game = games[currentSlide];

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${game.background_image})`,
      }}
    >
      <div className="overlay">
        <h1>{game.name}</h1>
      </div>
    </div>
  );
}

export default Hero;
