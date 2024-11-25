import { NavLink } from "react-router-dom";
import style from "./cardGame.module.css";

function CardGame({
  gameId,
  name,
  rating,
  image,
  handleClickFavorite,
}: {
  gameId: number;
  name: string;
  rating: number;
  image: string;
  handleClickFavorite(id: string): void;
}) {
  return (
    <section className={style.card}>
      <article className={style.article}>
        <NavLink to={`/details/${gameId}`}>
          <img
            src={image}
            alt={`Box cover of ${name}`}
            className={style.image}
          />
        </NavLink>
        <h2 className={style.title}>Name : {name}</h2>
        <h2 className={style.title}>Rating : {rating.toFixed(0)}/10</h2>
        <button
          type="button"
          className={style.button}
          onClick={() => handleClickFavorite(gameId.toString())}
        >
          Like
        </button>
      </article>
    </section>
  );
}

export default CardGame;
