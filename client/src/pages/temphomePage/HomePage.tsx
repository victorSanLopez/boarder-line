import GameDetails from "../../components/gameDetails/GameDetails";
import style from "./temphomePage.module.css";

export default function HomePage() {
  return (
    <section className={style.backgroundPage}>
      <GameDetails />{" "}
    </section>
  );
}
