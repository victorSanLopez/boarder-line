import { useEffect, useState } from "react";
import imageNotAvailable from "../../assets/images/image-not-available.png";
import searchIcon from "../../assets/images/search-loupe.png";
import style from "./gameDetails.module.css";

type gameDetailsType = {
  name: string;
  image?: string;
  minPlayers?: number;
  maxPlayers?: number;
  playingTime?: number;
  publishers?: string[];
  designers?: string[];
  averageRating?: number;
  description?: string;
};

export default function GameDetails() {
  const id = 1346;

  const [gameDetails, setGameDetails] = useState<gameDetailsType | null>(null);

  useEffect(() => {
    fetch(`https://bgg-json.azurewebsites.net/thing/${id}`)
      .then((response) => response.json())
      .then((result) => setGameDetails(result))
      .catch((error) => console.error("Error while fetching data :", error));
  }, []);

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

  const listFormatter = (list: string[] | undefined): string => {
    if (!list || list.length === 0) return "Unknown";
    if (list.length === 1) return list[0];
    const lastItem = list.pop();
    return `${list.join(", ")} and ${lastItem}`;
  };

  const averageRating = gameDetails.averageRating
    ? gameDetails.averageRating.toFixed(0)
    : "No rating available";

  const designers = listFormatter(gameDetails.designers);
  const publishers = listFormatter(gameDetails.publishers);

  return (
    <div className={style.componentSpace}>
      <section className={style.detailsBigCard}>
        <h2 className={style.h2}>{gameDetails.name}</h2>
        <figure className={style.figure}>
          <img
            className={style.img}
            src={gameDetails.image || imageNotAvailable}
            alt="Game visual"
          />
          <figcaption>
            <ul className={style.ul}>
              <li className={style.h3}>Type : </li>
              <li className={style.h3}>
                Number of players : {gameDetails.minPlayers}-
                {gameDetails.maxPlayers}
              </li>
              <li className={style.h3}>
                Playing time : {gameDetails.playingTime} minutes
              </li>
              <li className={style.h3}>Editor : {publishers}</li>
              <li className={style.h3}>Author : {designers}</li>
              <li className={style.h3}>Rating : {averageRating}</li>
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
