import { useLoaderData } from "react-router-dom";
import imageNotAvailable from "../../assets/images/image-not-available.png";
import searchIcon from "../../assets/images/search-loupe.png";
import type { gameDetailsType } from "../../assets/lib/definition";
import style from "./gameDetailsPage.module.css";

export default function GameDetailsPage() {
  const gameDetails: gameDetailsType = useLoaderData() as gameDetailsType;

  // Animation de chargement de l'API
  if (!gameDetails) {
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

  // Transforme les tableaux de l'API en string avec des "," et un "and" à la fin
  const arrayToListFormatter = (list: string[] | undefined) => {
    if (!list) return "Information unavailable";
    if (list.length === 1) return list[0];
    const lastItem = list.pop();
    return `${list.join(", ")} and ${lastItem}`;
  };

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
              <li className={style.h3}>Type : {gameDetails.type}</li>
              <li className={style.h3}>
                Number of players : {gameDetails.minPlayers || " ? "}-
                {gameDetails.maxPlayers || " ? "} players
              </li>
              <li className={style.h3}>
                Playing time : {gameDetails.playingTime || " ? "} minutes
              </li>
              <li className={style.h3}>
                Editor : {arrayToListFormatter(gameDetails.publishers)}
              </li>
              <li className={style.h3}>
                Author : {arrayToListFormatter(gameDetails.designers)}
              </li>
              <li className={style.h3}>
                Rating : {gameDetails.averageRating?.toFixed(0)}/10
              </li>
            </ul>
          </figcaption>
        </figure>
        <h3 className={style.h3}>Description :</h3>
        <p>{gameDetails.description}</p>
        <h3 className={style.h3}>Artists :</h3>
        <p>{arrayToListFormatter(gameDetails.artists)}</p>
        <h3 className={style.h3}>Expansions :</h3>
        <ul>
          {gameDetails.expansions?.map((exp) => (
            <li key={exp.gameId}>{exp.name}</li>
          )) || "There are currently no expansions available for this game..."}
        </ul>
      </section>
    </div>
  );
}
