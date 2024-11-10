import { useState } from "react";
import type { filterPanelProps } from "../../assets/lib/definition";
import style from "./filterPanel.module.css";

function FilterPanel({ filter, setFilter }: filterPanelProps) {
  const [displayPlayers, setDisplayPlayers] = useState(false);
  const [displayTime, setDisplayTime] = useState(false);
  const [displayRating, setDisplayRating] = useState(false);
  const [displayType, setDisplayType] = useState(false);

  const handleClickPlayers = () =>
    displayPlayers ? setDisplayPlayers(false) : setDisplayPlayers(true);
  const handleClickTime = () =>
    displayTime ? setDisplayTime(false) : setDisplayTime(true);
  const handleClickRating = () =>
    displayRating ? setDisplayRating(false) : setDisplayRating(true);
  const handleClickType = () =>
    displayType ? setDisplayType(false) : setDisplayType(true);
  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <section className={style.filter}>
        {/*button max players & filter*/}
        <div className={style.button_filter}>
          <button
            className={style.button}
            type="button"
            onClick={handleClickPlayers}
          >
            Players
          </button>
          <div>
            {displayPlayers && (
              <fieldset className={style.fieldset}>
                <label className={style.label} htmlFor="maxPlayer1">
                  <input
                    type="checkbox"
                    id="maxPlayer1"
                    name="player"
                    value="1"
                    checked={filter === "1"}
                    onChange={handleChangeFilter}
                  />
                  1 player{" "}
                </label>
                <label className={style.label} htmlFor="maxPlayer2">
                  <input
                    type="checkbox"
                    id="maxPlayer2"
                    name="player"
                    value="2"
                    checked={filter === "2"}
                    onChange={handleChangeFilter}
                  />
                  2 players
                </label>
                <label className={style.label} htmlFor="maxPlayer3">
                  <input
                    type="checkbox"
                    id="maxPlayer3"
                    name="player"
                    value="3"
                    checked={filter === "3"}
                    onChange={handleChangeFilter}
                  />
                  3 players
                </label>
                <label className={style.label} htmlFor="maxPlayer4">
                  <input
                    type="checkbox"
                    id="maxPlayer4"
                    name="player"
                    value="4"
                    checked={filter === "4"}
                    onChange={handleChangeFilter}
                  />
                  4 players+
                </label>
              </fieldset>
            )}
          </div>
        </div>
        {/*button playing time & filter*/}
        <div className={style.button_filter}>
          <button
            className={style.button}
            type="button"
            onClick={handleClickTime}
          >
            Playing time
          </button>
          <div>
            {displayTime && (
              <fieldset className={style.fieldset}>
                <label className={style.label} htmlFor="time1">
                  <input
                    type="checkbox"
                    id="time1"
                    name="time"
                    value="30"
                    checked={filter === "30"}
                    onChange={handleChangeFilter}
                  />
                  30 min
                </label>
                <label className={style.label} htmlFor="time2">
                  <input
                    type="checkbox"
                    id="time2"
                    name="time"
                    value="60"
                    checked={filter === "60"}
                    onChange={handleChangeFilter}
                  />
                  60 min{" "}
                </label>
                <label className={style.label} htmlFor="time3">
                  <input
                    type="checkbox"
                    id="time3"
                    name="time"
                    value="90"
                    checked={filter === "90"}
                    onChange={handleChangeFilter}
                  />
                  90 min{" "}
                </label>
                <label className={style.label} htmlFor="time3">
                  <input
                    type="checkbox"
                    id="time4"
                    name="time"
                    value="120"
                    checked={filter === "120"}
                    onChange={handleChangeFilter}
                  />
                  120 min+
                </label>
              </fieldset>
            )}
          </div>
        </div>
        {/*button rating time & filter*/}
        <div className={style.button_filter}>
          <button
            className={style.button}
            type="button"
            onClick={handleClickRating}
          >
            Rating
          </button>
          <div>
            {displayRating && (
              <fieldset className={style.fieldset}>
                <label className={style.label} htmlFor="rating0">
                  <input
                    type="radio"
                    id="rating0"
                    name="rating"
                    value="0.0"
                    checked={filter === "0.0"}
                    onChange={handleChangeFilter}
                  />
                  0
                </label>
                <label className={style.label} htmlFor="rating1">
                  <input
                    type="radio"
                    id="rating1"
                    name="rating"
                    value="1.0"
                    checked={filter === "1.0"}
                    onChange={handleChangeFilter}
                  />
                  1{" "}
                </label>
                <label className={style.label} htmlFor="rating3">
                  <input
                    type="radio"
                    id="rating3"
                    name="rating"
                    value="2.0"
                    checked={filter === "2.0"}
                    onChange={handleChangeFilter}
                  />
                  2
                </label>
                <label className={style.label} htmlFor="rating3">
                  <input
                    type="radio"
                    id="rating3"
                    name="rating"
                    value="3.0"
                    checked={filter === "3.0"}
                    onChange={handleChangeFilter}
                  />
                  3
                </label>
                <label className={style.label} htmlFor="rating4">
                  <input
                    type="radio"
                    id="rating4"
                    name="rating"
                    value="4.0"
                    checked={filter === "4.0"}
                    onChange={handleChangeFilter}
                  />
                  4
                </label>
                <label className={style.label} htmlFor="rating5">
                  <input
                    type="radio"
                    id="rating5"
                    name="rating"
                    value="5.0"
                    checked={filter === "5.0"}
                    onChange={handleChangeFilter}
                  />
                  5{" "}
                </label>
                <label className={style.label} htmlFor="rating6">
                  <input
                    type="radio"
                    id="rating6"
                    name="rating"
                    value="6.0"
                    checked={filter === "6.0"}
                    onChange={handleChangeFilter}
                  />
                  6
                </label>
                <label className={style.label} htmlFor="rating7">
                  <input
                    type="radio"
                    id="rating7"
                    name="rating"
                    value="7.0"
                    checked={filter === "7.0"}
                    onChange={handleChangeFilter}
                  />
                  7
                </label>
                <label className={style.label} htmlFor="rating8">
                  <input
                    type="radio"
                    id="rating8"
                    name="rating"
                    value="8.0"
                    checked={filter === "8.0"}
                    onChange={handleChangeFilter}
                  />
                  8{" "}
                </label>
                <label className={style.label} htmlFor="rating9">
                  <input
                    type="radio"
                    id="rating9"
                    name="rating"
                    value="9.0"
                    checked={filter === "9.0"}
                    onChange={handleChangeFilter}
                  />
                  9
                </label>
                <label className={style.label} htmlFor="rating10">
                  <input
                    type="radio"
                    id="rating10"
                    name="rating"
                    value="10.0"
                    checked={filter === "10.0"}
                    onChange={handleChangeFilter}
                  />
                  10
                </label>
              </fieldset>
            )}
          </div>
        </div>
        {/*button type of game & filter*/}
        <div className={style.button_filter}>
          <button
            className={style.button}
            type="button"
            onClick={handleClickType}
          >
            Type
          </button>
          <div>
            {displayType && (
              <fieldset className={style.fieldset}>
                <label className={style.label} htmlFor="type1">
                  <input
                    type="radio"
                    id="type1"
                    name="type"
                    value="Multi-Use Cards"
                    checked={filter === "Multi-Use Cards"}
                    onChange={handleChangeFilter}
                  />
                  Deck builder
                </label>
                <label className={style.label} htmlFor="type2">
                  <input
                    type="radio"
                    id="type2"
                    name="type"
                    value="Dice Rolling"
                    checked={filter === "Dice Rolling"}
                    onChange={handleChangeFilter}
                  />
                  Dice
                </label>
                <label className={style.label} htmlFor="type3">
                  <input
                    type="radio"
                    id="type3"
                    name="type"
                    value="Cooperative Game"
                    checked={filter === "Cooperative Game"}
                    onChange={handleChangeFilter}
                  />
                  Cooperative
                </label>
                <label className={style.label} htmlFor="type4">
                  <input
                    type="radio"
                    id="type4"
                    name="type"
                    value="Automatic Resource Growth"
                    checked={filter === "Automatic Resource Growth"}
                    onChange={handleChangeFilter}
                  />
                  Ressource management
                </label>
              </fieldset>
            )}
          </div>
        </div>
        <button className={style.button} type="button">
          All games
        </button>
      </section>
    </>
  );
}

export default FilterPanel;
