// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./cardGame.module.css";

function CardGame({
  gameId,
  name,
  rating,
  image,
}: { gameId: number; name: string; rating: number; image: string }) {
  // const [like, setLike] = useState([]);

  // ajouter un nouveau favoris au click
  // const handleClick = (id: string) => {
  //   const newLike = [...like, id];
  //   setLike(newLike);
  //   localStorage.setItem("favorites", JSON.stringify(newLike));
  // };

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
          // onClick={() => handleClick(gameId)}
        >
          Like
        </button>
      </article>
    </section>
  );
}

export default CardGame;
