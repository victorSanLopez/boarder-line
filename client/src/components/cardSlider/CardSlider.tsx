import { useState } from "react";
import type { boardGameListType } from "../../assets/lib/definition";
import CardGame from "../cardGame/CardGame";
import style from "./cardSlider.module.css";

export default function CardSlider({
  boardGamesList,
}: { boardGamesList: boardGameListType[] }) {
  const [slider, setSlider] = useState(0);
  const previousSlide = () =>
    slider > 0 ? setSlider(slider - 1) : setSlider(boardGamesList.length - 1);
  const nextSlide = () =>
    slider < boardGamesList.length - 1 ? setSlider(slider + 1) : setSlider(0);
  return (
    <>
      <section className={style.sliderFolder}>
        <article className={`${style.cardSliderLeft}`}>
          <CardGame
            name={
              slider !== 0
                ? boardGamesList[slider - 1].name
                : boardGamesList[boardGamesList.length - 1].name
            }
            rating={
              slider !== 0
                ? boardGamesList[slider - 1].averageRating
                : boardGamesList[boardGamesList.length - 1].averageRating
            }
            image={
              slider !== 0
                ? boardGamesList[slider - 1].image
                : boardGamesList[boardGamesList.length - 1].image
            }
          />
        </article>
        <article className={`${style.cardSliderRight}`}>
          <CardGame
            name={
              slider !== boardGamesList.length - 1
                ? boardGamesList[slider + 1].name
                : boardGamesList[0].name
            }
            rating={
              slider !== boardGamesList.length - 1
                ? boardGamesList[slider + 1].averageRating
                : boardGamesList[0].averageRating
            }
            image={
              slider !== boardGamesList.length - 1
                ? boardGamesList[slider + 1].image
                : boardGamesList[0].image
            }
          />
        </article>
        <article className={`${style.cardSlider}`}>
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
