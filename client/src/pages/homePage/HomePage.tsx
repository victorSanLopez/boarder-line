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

  // liste des découvertes de l'équipe

  const FAVOURITES_GAMES = [
    "7 Wonders",
    "Carcassonne",
    "Dixit",
    "Jamaica",
    "Myrmes",
    "Pandemic",
    "Scythe",
  ];

  // logique du slider des découvertes:

  const boardGamesDiscovery: boardGameListType[] | null = boardGames
    ? boardGames
        .map((g) => (FAVOURITES_GAMES.includes(g.name) ? g : false))
        .filter((g) => g !== false)
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
