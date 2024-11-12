import { useState } from "react";
import gameData from "../../assets/data/gameDate.json";
import FilterPanel from "../../components/filterPanel/FilterPanel";
import style from "./HomePage.module.css";

export default function HomePage() {
  const [filterGame, setFilterGame] = useState("");

  const fullGame = gameData;

  const userFilterPlayers = fullGame.filter(
    (f) => f.minPlayers >= Number.parseInt(filterGame),
  );
  const userFilterTime = fullGame.filter(
    (f) => f.playingTime === Number.parseInt(filterGame),
  );
  const userFilterRating = fullGame.filter(
    (f) => f.rating === Number.parseFloat(filterGame),
  );
  const userFilterType = fullGame.filter((f) =>
    f.mechanics?.includes(filterGame),
  );

  return (
    <section className={style.backgroundPage}>
      <FilterPanel filterGame={filterGame} setFilterGame={setFilterGame} />
      <div className={style.myDiv}>
        {Number.parseInt(filterGame) < 5 &&
          userFilterPlayers.map((g) => (
            <div key={g.gameId} className={style.div}>
              <h1>{g.name}</h1>
              <img className={style.img} src={g.image} alt={g.name} />
              <p>{g.minPlayers}</p>
              <p>{g.playingTime}</p> <p>{g.rating}</p>
            </div>
          ))}
        {Number.parseInt(filterGame) > 10 &&
          userFilterTime.map((g) => (
            <div key={g.gameId} className={style.div}>
              <h1>{g.name}</h1>
              <img className={style.img} src={g.image} alt={g.name} />
              <p>{g.minPlayers}</p>
              <p>{g.playingTime}</p> <p>{g.rating}</p>
            </div>
          ))}
        {Number.parseFloat(filterGame) >= 5.0 &&
          userFilterRating.map((g) => (
            <div key={g.gameId} className={style.div}>
              <h1>{g.name}</h1>
              <img className={style.img} src={g.image} alt={g.name} />
              <p>{g.minPlayers}</p>
              <p>{g.playingTime}</p> <p>{g.rating}</p>
            </div>
          ))}
        {(filterGame === "Dice Rolling" ||
          filterGame === "Automatic Resource Growth" ||
          filterGame === "Cooperative Game" ||
          filterGame === "Multi-Use Cards") &&
          userFilterType.map((g) => (
            <div key={g.gameId} className={style.div}>
              <h1>{g.name}</h1>
              <img className={style.img} src={g.image} alt={g.name} />
              <p>{g.minPlayers}</p>
              <p>{g.playingTime}</p> <p>{g.rating}</p>
            </div>
          ))}
        {filterGame === "" &&
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
