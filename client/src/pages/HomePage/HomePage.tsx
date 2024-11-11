import { useState } from "react";
import gameData from "../../assets/data/gameDate.json";
import FilterPanel from "../../components/filterPanel/FilterPanel";
import style from "./HomePage.module.css";

export default function HomePage() {
  const [filter, setFilter] = useState("");
  const fullGame = gameData;

  const userFilterPlayers = fullGame.filter(
    (f) => f.minPlayers === Number.parseInt(filter),
  );
  const userFilterTime = fullGame.filter(
    (f) => f.playingTime === Number.parseInt(filter),
  );
  const userFilterRating = fullGame.filter(
    (f) => f.rating === Number.parseFloat(filter),
  );
  const userFilterType = fullGame.filter((f) => f.mechanics?.includes(filter));

  return (
    <section className={style.backgroundPage}>
      <FilterPanel filter={filter} setFilter={setFilter} />
      <div className={style.myDiv}>
        {Number.parseInt(filter) < 5 &&
          userFilterPlayers.map((g) => (
            <div key={g.gameId} className={style.div}>
              <h1>{g.name}</h1>
              <img className={style.img} src={g.image} alt={g.name} />
              <p>{g.minPlayers}</p>
              <p>{g.playingTime}</p> <p>{g.rating}</p>
            </div>
          ))}
        {Number.parseInt(filter) > 10 &&
          userFilterTime.map((g) => (
            <div key={g.gameId} className={style.div}>
              <h1>{g.name}</h1>
              <img className={style.img} src={g.image} alt={g.name} />
              <p>{g.minPlayers}</p>
              <p>{g.playingTime}</p> <p>{g.rating}</p>
            </div>
          ))}
        {Number.parseFloat(filter) >= 5.0 &&
          userFilterRating.map((g) => (
            <div key={g.gameId} className={style.div}>
              <h1>{g.name}</h1>
              <img className={style.img} src={g.image} alt={g.name} />
              <p>{g.minPlayers}</p>
              <p>{g.playingTime}</p> <p>{g.rating}</p>
            </div>
          ))}
        {(filter === "Dice Rolling" ||
          filter === "Automatic Resource Growth" ||
          filter === "Cooperative Game" ||
          filter === "Multi-Use Cards") &&
          userFilterType.map((g) => (
            <div key={g.gameId} className={style.div}>
              <h1>{g.name}</h1>
              <img className={style.img} src={g.image} alt={g.name} />
              <p>{g.minPlayers}</p>
              <p>{g.playingTime}</p> <p>{g.rating}</p>
            </div>
          ))}
        {filter === "" &&
          fullGame.map((g) => (
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
