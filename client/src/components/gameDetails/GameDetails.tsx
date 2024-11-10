import style from "./gameDetails.module.css";

export default function GameDetails() {
  return (
    <div className={style.componentSpace}>
      <section className={style.detailsBigCard}>
        <h2 className={style.h2}>Titre du jeu</h2>
        <figure className={style.figure}>
          <img
            className={style.img}
            src="https://picsum.photos/300"
            alt="Visuel du jeu"
          />
          <figcaption>
            <ul className={style.ul}>
              <li className={style.h3}>Type :</li>
              <li className={style.h3}>Max players :</li>
              <li className={style.h3}>Playing time :</li>
              <li className={style.h3}>Editor :</li>
              <li className={style.h3}>Author :</li>
              <li className={style.h3}>Rating :</li>
            </ul>
          </figcaption>
        </figure>
        <h3 className={style.h3}>Description :</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          laudantium amet molestias voluptas accusantium iusto. Repellendus
          repellat incidunt harum quas cum, quod vel quos! Sed iusto magnam
          perferendis? Earum blanditiis, quos possimus labore provident et
          explicabo velit sapiente, laudantium consectetur tempora cupiditate in
          saepe soluta esse reiciendis animi.
        </p>
        <h3 className={style.h3}>Extensions :</h3>
        <div className={style.extensions}>Work in progress...</div>
        <h3 className={style.h3}>Coms :</h3>
        <div className={style.coms}>Work in progress...</div>
      </section>
    </div>
  );
}
