import { useEffect, useState } from "react";
import imageNotAvailable from "../../assets/images/image-not-available.png";
import searchIcon from "../../assets/images/search-loupe.png";
import type { gameDetailsType } from "../../assets/lib/definition";
import style from "./gameDetails.module.css";

export default function GameDetails() {
  const id = 124742;

  const [gameDetails, setGameDetails] = useState<gameDetailsType | null>(null);

  useEffect(() => {
    fetch(`https://bgg-json.azurewebsites.net/thing/${id}`)
      .then((response) => response.json())
      .then((result) => setGameDetails(result))
      .catch((error) => console.error("Error while fetching data :", error));
  }, []);

  if (!gameDetails) {
    // Animation en cas de perte de l'API
    return (
      <section className={style.loadingSection}>
        <img
          className={style.loadingAnimation}
          src={searchIcon}
          alt="Loading animation"
        />
        <p>Loading data...</p>
      </section>
    );
  }

  const arrayToListFormatter = (list: string[] | undefined) => {
    if (!list) return "Unknown";
    if (list.length === 1) return list[0];
    const lastItem = list.pop();
    return `${list.join(", ")} and ${lastItem}`;
  };

  const publishers = arrayToListFormatter(gameDetails.publishers);
  const designers = arrayToListFormatter(gameDetails.designers);

  return (
    <div className={style.componentSpace}>
      <section className={style.detailsBigCard}>
        <h2 className={style.h2}>
          {gameDetails.name || "Title not available"}
        </h2>
        <figure className={style.figure}>
          <img
            className={style.img}
            src={gameDetails.image || imageNotAvailable}
            alt="Game visual"
          />
          <figcaption>
            <ul className={style.ul}>
              <li className={style.h3}>Type : Unknown</li>
              <li className={style.h3}>
                Number of players : {gameDetails.minPlayers || "?"}-
                {gameDetails.maxPlayers || "?"} players
              </li>
              <li className={style.h3}>
                Playing time : {gameDetails.playingTime || "???"} minutes
              </li>
              <li className={style.h3}>Editor : {publishers}</li>
              <li className={style.h3}>Author : {designers}</li>
              <li className={style.h3}>
                Rating : {gameDetails.averageRating?.toFixed(0)}/10
              </li>
            </ul>
          </figcaption>
        </figure>
        <h3 className={style.h3}>Description :</h3>
        <p>{gameDetails.description}</p>
        <h3 className={style.h3}>Expansions :</h3>
        <div className={style.extensions}>Work in progress...</div>
        <h3 className={style.h3}>Coms :</h3>
        <div className={style.coms}>Work in progress...</div>
      </section>
    </div>
  );
}
