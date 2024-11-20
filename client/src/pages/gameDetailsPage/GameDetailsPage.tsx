import { useLoaderData } from "react-router-dom";
import imageNotAvailable from "../../assets/images/image-not-available.png";
import searchIcon from "../../assets/images/search-loupe.png";
import type { gameDetailsType } from "../../assets/lib/definition";
import style from "./gameDetailsPage.module.css";

export default function GameDetailsPage() {
  const gameDetails: gameDetailsType = useLoaderData() as gameDetailsType;

  // const { id } = useParams();
  // const idNumber ; number = Number.parseInt(id as string);
  // const boardGameDetails = boardGames.find((b) => b.gameId === idNumber);

  if (!gameDetails) {
    // Animation de chargement de l'API
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
    // Transforme les tableaux de l'API en string avec des "," et un "and" à la fin
    if (!list) return "Unknown";
    if (list.length === 1) return list[0];
    const lastItem = list.pop();
    return `${list.join(", ")} and ${lastItem}`;
  };

  const artists = arrayToListFormatter(gameDetails.artists);
  const designers = arrayToListFormatter(gameDetails.designers);
  const publishers = arrayToListFormatter(gameDetails.publishers);

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
        <h3 className={style.h3}>Artists :</h3>
        <p>{artists}</p>
        <h3 className={style.h3}>Expansions :</h3>
        <ul>
          {gameDetails.expansions?.map((exp) => (
            <li key={exp.gameId}>{exp.name}</li>
          )) || "This game currently has no expansions"}
        </ul>
        <h3 className={style.h3}>Coms :</h3>
        <div className={style.coms}>Work in progress...</div>
      </section>
    </div>
  );
}
