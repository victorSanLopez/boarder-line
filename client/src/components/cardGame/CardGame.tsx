import style from "./cardGame.module.css";

function CardGame({
  name,
  rating,
  image,
}: { name: string; rating: number; image: string }) {
  return (
    <section className={style.card}>
      <article className={style.article}>
        <a href="https://bgg-json.azurewebsites.net/collection/edwalter">
          <img src={image} alt={`Jeu ${name}`} className={style.image} />
        </a>
        <h2 className={style.title}>Name : {name}</h2>
        <h2 className={style.title}>Rating : {Math.trunc(rating)}</h2>
        <button type="button" className={style.button}>
          Like
        </button>
      </article>
    </section>
  );
}

export default CardGame;
