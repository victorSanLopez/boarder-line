import FilterPanel from "../../components/filterPanel/FilterPanel";
import gameData from "../../assets/data/gameDate.json";
import style from "./HomePage.module.css";
import { useState } from "react";

export default function HomePage() {
  const [filter, setFilter] = useState("");
  const fullGame = gameData;

  const userChoice =
    filter === ""
      ? fullGame
      : fullGame.filter((f) => f.minPlayers === Number.parseInt(filter));

  return (
    <section className={style.backgroundPage}>
      <FilterPanel filter={filter} setFilter={setFilter} />
      <div className={style.myDiv}>
        {userChoice.map((g) => (
          <div key={g.gameId} className={style.div}>
            <h1>{g.name}</h1>
            <img className={style.img} src={g.image} alt={g.name} />
            <p>{g.minPlayers}</p>
            <p>{g.playingTime}</p> <p>{g.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
