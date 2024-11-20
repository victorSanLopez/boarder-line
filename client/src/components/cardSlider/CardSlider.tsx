import { useState } from "react";
import type { boardGameListType } from "../../assets/lib/definition";
import CardGame from "../cardGame/CardGame";
import style from "./cardSlider.module.css";

export default function CardSlider({
  boardGamesList,
}: { boardGamesList: boardGameListType[] }) {
  //gestion de l'état

  const [slider, setSlider] = useState(0);

  //logique du bouton précedent

  const previousSlide = () =>
    slider > 0 ? setSlider(slider - 1) : setSlider(boardGamesList.length - 1);

  //logique du bouton suivant

  const nextSlide = () =>
    slider < boardGamesList.length - 1 ? setSlider(slider + 1) : setSlider(0);

  // carte de gauche

  const previous = slider === 0 ? boardGamesList.length - 1 : slider - 1;

  // carte droite

  const next = slider === boardGamesList.length - 1 ? 0 : slider + 1;

  return (
    <>
      <section className={style.sliderFolder}>
        <article className={style.cardSliderLeft}>
          <CardGame
            name={boardGamesList[previous].name}
            rating={boardGamesList[previous].averageRating}
            image={boardGamesList[previous].image}
          />
        </article>
        <article className={style.cardSliderRight}>
          <CardGame
            name={boardGamesList[next].name}
            rating={boardGamesList[next].averageRating}
            image={boardGamesList[next].image}
          />
        </article>
        <article className={style.cardSlider}>
          <CardGame
            name={boardGamesList[slider].name}
            rating={boardGamesList[slider].averageRating}
            image={boardGamesList[slider].image}
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