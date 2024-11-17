import { useLoaderData } from "react-router-dom";
import type { boardGameListType } from "../../assets/lib/definition";
import CardSlider from "../../components/cardSlider/CardSlider";
import style from "./homePage.module.css";

export default function HomePage() {
  // loader
  const boardGames: boardGameListType[] =
    useLoaderData() as boardGameListType[];

  // logique du slider: top jeu

  const boardGamesTop: boardGameListType[] | null = boardGames
    ? boardGames.filter((games) => games.averageRating > 8)
    : [];

  // logique du slider: liste des découvertes de l'équipe

  const boardGamesDiscovery: boardGameListType[] | null = boardGames
    ? boardGames.filter(
        (games) =>
          games.name === "7 Wonders" ||
          games.name === "Carcassonne" ||
          games.name === "Dixit" ||
          games.name === "Jamaica" ||
          games.name === "Myrmes" ||
          games.name === "Pandemic" ||
          games.name === "Scythe",
      )
    : [];
  return (
    <section className={style.backgroundPage}>
      <h1 className={style.titleSlide}>Discovery</h1>
      {boardGames && <CardSlider boardGamesList={boardGamesDiscovery} />}
      <h1 className={style.titleSlide}>Top Games</h1>
      {boardGames && <CardSlider boardGamesList={boardGamesTop} />}
    </section>
  );
}
