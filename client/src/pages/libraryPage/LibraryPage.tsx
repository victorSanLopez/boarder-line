import GameDetails from "../../components/gameDetails/GameDetails";
import style from "./libraryPage.module.css";

// page library pour lister les jeux et les filtrer

export default function LibraryPage() {
  return (
    <section className={style.backgroundPage}>
      <GameDetails gameId={77423} />
    </section>
  );
}
