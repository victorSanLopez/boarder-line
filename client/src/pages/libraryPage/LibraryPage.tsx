import { useEffect, useState } from "react";
//import { useLoaderData } from "react-router-dom";
import type { boardGameListType } from "../../assets/lib/definition";
import CardGame from "../../components/cardGame/CardGame";
import FilterPanel from "../../components/filterPanel/FilterPanel";
import style from "./libraryPage.module.css";

// page library pour lister les jeux et les filtrer

export default function libraryPage() {
  const [filterGame, setFilterGame] = useState("");
  const [data, setData] = useState([]);

  const fullGame: boardGameListType[] = data;

  useEffect(() => {
    fetch("http://localhost:3310/api/games")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const userFilterPlayers = fullGame.filter(
    (f) => f.minPlayers >= Number.parseInt(filterGame),
  );
  const userFilterTime = fullGame.filter(
    (f) => f.playingTime === Number.parseInt(filterGame),
  );
  const userFilterRating = fullGame.filter(
    (f) => Math.trunc(f.averageRating) === Number.parseInt(filterGame),
  );
  const userFilterType = fullGame.filter((f) =>
    f.mechanics?.includes(filterGame),
  );
  const userRating =
    Number.parseInt(filterGame) > 5 && Number.parseInt(filterGame) <= 10;
  const userPlayers = Number.parseFloat(filterGame) < 5;
  const userTime = Number.parseInt(filterGame) > 20;
  const userType =
    filterGame === "Dice Rolling" ||
    filterGame === "Automatic Resource Growth" ||
    filterGame === "Cooperative Game" ||
    filterGame === "Multi-Use Cards";

  return (
    <section className={style.backgroundPage}>
      <FilterPanel filterGame={filterGame} setFilterGame={setFilterGame} />
      <div className={style.cards}>
        {userPlayers &&
          userFilterPlayers.map((g) => <CardGame key={g.gameId} card={g} />)}
        {userTime &&
          userFilterTime.map((g) => <CardGame key={g.gameId} card={g} />)}
        {userRating &&
          userFilterRating.map((g) => <CardGame key={g.gameId} card={g} />)}
        {userType &&
          userFilterType.map((g) => <CardGame key={g.gameId} card={g} />)}
        {filterGame === "" &&
          fullGame.map((g) => <CardGame key={g.gameId} card={g} />)}
      </div>
    </section>
  );
}
