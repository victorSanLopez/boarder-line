import style from "./gameDetails.module.css";

export default function GameDetails() {
  return (
    <section className="style.detailsBigCard">
      <h2>Titre du jeu</h2>
      <figure>
        <img src="_" alt="Visuel du jeu" />
      </figure>
      <figcaption>
        <ul>
          <li>Type :</li>
          <li>Max players :</li>
          <li>Playing time :</li>
          <li>Editor :</li>
          <li>Author :</li>
          <li>Rating :</li>
        </ul>
      </figcaption>
      <h3>Description :</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        laudantium amet molestias voluptas accusantium iusto. Repellendus
        repellat incidunt harum quas cum, quod vel quos! Sed iusto magnam
        perferendis? Earum blanditiis, quos possimus labore provident et
        explicabo velit sapiente, laudantium consectetur tempora cupiditate in
        saepe soluta esse reiciendis animi a? Nemo?
      </p>
      <h3>Extensions :</h3>
      <h3>Coms :</h3>
    </section>
  );
}
