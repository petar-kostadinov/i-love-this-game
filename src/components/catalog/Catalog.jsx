import { useEffect, useState } from "react";
import request from "../../utils/request";
import GameCard from "../game-card/GameCard";

export default function Catalog() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request("/games?order=created_at.desc")
      .then(setGames)
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section id="catalog-page">
      <h1>Catalog</h1>
      <div className="catalog-container">
        {games.length > 0 ? (
          games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))
        ) : !isLoading ? (
          <h3 className="no-articles">No Added Games Yet</h3>
        ) : null}
      </div>
    </section>
  );
}
