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
        {boardGamesList.map((element, index) => (
          <article
            key={element.gameId}
            className={
              slider === index
                ? `${style.cardSliderLeft}`
                : `${style.cardSliderHidden}`
            }
          >
            <CardGame
              name={
                slider !== 0
                  ? boardGamesList[slider - 1].name
                  : boardGamesList[boardGamesList.length - 1].name
              }
              rating={
                slider !== 0
                  ? boardGamesList[slider - 1].rating
                  : boardGamesList[boardGamesList.length - 1].rating
              }
              image={
                slider !== 0
                  ? boardGamesList[slider - 1].image
                  : boardGamesList[boardGamesList.length - 1].image
              }
            />
          </article>
        ))}
        {boardGamesList.map((element, index) => (
          <article
            key={element.gameId}
            className={
              slider === index
                ? `${style.cardSliderRight}`
                : `${style.cardSliderHidden}`
            }
          >
            <CardGame
              name={
                slider !== boardGamesList.length - 1
                  ? boardGamesList[slider + 1].name
                  : boardGamesList[0].name
              }
              rating={
                slider !== boardGamesList.length - 1
                  ? boardGamesList[slider + 1].rating
                  : boardGamesList[0].rating
              }
              image={
                slider !== boardGamesList.length - 1
                  ? boardGamesList[slider + 1].image
                  : boardGamesList[0].image
              }
            />
          </article>
        ))}
        {boardGamesList.map((element, index) => (
          <article
            key={element.gameId}
            className={
              slider === index
                ? `${style.cardSlider}`
                : `${style.cardSliderHidden}`
            }
          >
            <CardGame
              name={element.name}
              rating={element.rating}
              image={element.image}
            />
          </article>
        ))}
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
