import { useEffect, useState } from "react";
import type { boardGameListType } from "../../assets/lib/definition";
import CardSlider from "../../components/cardSlider/CardSlider";
import style from "./homePage.module.css";

export default function HomePage() {
  // recupération de l'api
  const [boardGames, setBoardGames] = useState<boardGameListType[] | null>(
    null,
  );
  useEffect(() => {
    fetch("https://bgg-json.azurewebsites.net/collection/edwalter")
      .then((result) => result.json())
      .then((result) => setBoardGames(result));
  }, []);

  // logique du slider du top jeu

  const boardGamesTop = boardGames
    ? boardGames.filter((games) => games.rating > 8)
    : [];

  return (
    <section className={style.backgroundPage}>
      <h1 className={style.titleSlide}>Top Games</h1>
      <CardSlider boardGamesList={boardGamesTop} />
      <h1 className={style.titleSlide}>Discovery</h1>
      <CardSlider boardGamesList={boardGamesTop} />
    </section>
  );
}
