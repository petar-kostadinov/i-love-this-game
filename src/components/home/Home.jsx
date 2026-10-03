import { useEffect, useState } from "react";
import request from "../../utils/request";
import GameCard from "../game-card/GameCard";

export default function Home() {
  const [latestGames, setLatestGames] = useState(
    [],
  );
  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    request(
      `/games?order=created_at.desc&limit=3`,
      "GET",
      null,
      { signal: abortController.signal },
    )
      .then(setLatestGames)
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));

      return () => {
        abortController.abort();
      }
  }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in </h3>
        <img
          id="logo-left"
          src="./images/logo.png"
          alt="logo"
        />
      </div>
      <div id="home-page">
        <h1>Latest Games</h1>
        <div id="latest-wrap">
          <div className="home-container">
            {latestGames.length > 0 ? (
              latestGames.map((game) => (
                <GameCard
                  key={game.id}
                  {...game}
                />
              ))
            ) : !isLoading ? (
              <p class="no-articles">
                No games yet
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
