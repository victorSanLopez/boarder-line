import style from "./cardGame.module.css";
import { cardProps } from "../../assets/lib";

function CardGame({ card }: { card: cardProps }) {
  return (
    <section className={style.card}>
      <article className={style.article}>
        <a href="https://bgg-json.azurewebsites.net/collection/edwalter">
          <img
            src={card.image}
            alt={`Jeu ${card.name}`}
            className={style.image}
          />
        </a>
        <h2 className={style.title}>Name : {card.name}</h2>
        <h2 className={style.title}>Rating : {card.rating}</h2>
        <button type="button" className={style.button}>
          Like
        </button>
      </article>
    </section>
  );
}

export default CardGame;
