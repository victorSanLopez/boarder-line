import imageHero from "../../../public/images/banniere/fox-hyde-XgPf6yNdppI-unsplash.jpg";
import style from "./héroImage.module.css";

function HeroImage() {
  const hero = imageHero;
  return (
    <>
      <header className={style.header}>
        <img className={style.img} src={hero} alt="bannière" />

        <section className={style.title}>
          <h1 className={style.titlePage}>BOARDER LINE</h1>
          <h1 className={style.subtitle}>Where every game tells a story...</h1>
        </section>
        <article className={style.description}>
          <p>
            We're passionate about the world of board games and the joy of
            gathering around a table with friends. From classic strategies to
            hidden gems, our site offers reviews, tips, and a space for players
            to connect, share, and discover new games. Whether you're a seasoned
            player or a curious newcomer, pull up a chair, roll the dice, and
            let the adventure begin!
          </p>
        </article>
      </header>
    </>
  );
}

export default HeroImage;
