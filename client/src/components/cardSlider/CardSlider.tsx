import { useState } from "react";
import type { boardGameListType } from "../../assets/lib/definition";
import type { cardType } from "../../assets/lib/definition";
import CardGame from "../cardGame/CardGame";
import style from "./cardSlider.module.css";

export default function CardSlider({
  boardGamesList,
}: { boardGamesList: boardGameListType[] }) {
  //gestion de l'état

  const [slider, setSlider] = useState(0);

  //logique des boutton

  const previousSlide = () =>
    slider > 0 ? setSlider(slider - 1) : setSlider(boardGamesList.length - 1);
  const nextSlide = () =>
    slider < boardGamesList.length - 1 ? setSlider(slider + 1) : setSlider(0);

  //gestion de l'affichage de la carte de gauche

  const cardLeft: cardType = {
    gameName:
      slider !== 0
        ? boardGamesList[slider - 1].name
        : boardGamesList[boardGamesList.length - 1].name,
    gameRating:
      slider !== 0
        ? boardGamesList[slider - 1].averageRating
        : boardGamesList[boardGamesList.length - 1].averageRating,
    gameImage:
      slider !== 0
        ? boardGamesList[slider - 1].image
        : boardGamesList[boardGamesList.length - 1].image,
    styleCard: style.cardSliderLeft,
  };

  //gestion de l'affichage de la carde du milieu

  const cardMiddle: cardType = {
    gameName: boardGamesList[slider].name,
    gameRating: boardGamesList[slider].averageRating,
    gameImage: boardGamesList[slider].image,
    styleCard: style.cardSlider,
  };

  //gestion de l'affichage de la carte de droite

  const cardRight: cardType = {
    gameName:
      slider !== boardGamesList.length - 1
        ? boardGamesList[slider + 1].name
        : boardGamesList[0].name,
    gameRating:
      slider !== boardGamesList.length - 1
        ? boardGamesList[slider + 1].averageRating
        : boardGamesList[0].averageRating,
    gameImage:
      slider !== boardGamesList.length - 1
        ? boardGamesList[slider + 1].image
        : boardGamesList[0].image,
    styleCard: style.cardSliderRight,
  };
  return (
    <>
      <section className={style.sliderFolder}>
        <article className={cardLeft.styleCard}>
          <CardGame
            name={cardLeft.gameName}
            rating={cardLeft.gameRating}
            image={cardLeft.gameImage}
          />
        </article>
        <article className={cardRight.styleCard}>
          <CardGame
            name={cardRight.gameName}
            rating={cardRight.gameRating}
            image={cardRight.gameImage}
          />
        </article>
        <article className={cardMiddle.styleCard}>
          <CardGame
            name={cardMiddle.gameName}
            rating={cardMiddle.gameRating}
            image={cardMiddle.gameImage}
          />
        </article>
        <button
          type="button"
          onClick={previousSlide}
          className={`${style.buttonSlider} ${style.buttonLeft}`}
        >
          {" "}
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className={`${style.buttonSlider} ${style.buttonRight}`}
        >
          {" "}
        </button>
      </section>
    </>
  );
}
