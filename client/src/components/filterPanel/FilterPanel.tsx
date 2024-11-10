import { useState } from "react";

function FilterPanel() {
  const [displayPlayers, setDisplayPlayers] = useState(false);
  const [displayTime, setDisplayTime] = useState(false);
  const [displayRating, setDisplayRating] = useState(false);
  const [displayType, setDisplayType] = useState(false);
  const [filter, setFilter] = useState("one");
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
      {/*button max players & filter*/}
      <button type="button" onClick={handleClickPlayers}>
        Max players
      </button>
      {displayPlayers && (
        <fieldset>
          <input
            type="radio"
            id="maxPlayer1"
            name="player"
            value="1"
            checked={filter === "1"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="maxPlayer1">1 player</label>
          <input
            type="radio"
            id="maxPlayer2"
            name="player"
            value="2"
            checked={filter === "2"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="maxPlayer2">2 players</label>
          <input
            type="radio"
            id="maxPlayer3"
            name="player"
            value="3"
            checked={filter === "3"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="maxPlayer3">3 players</label>
          <input
            type="radio"
            id="maxPlayer4"
            name="player"
            value="4"
            checked={filter === "4"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="maxPlayer4">4 players+</label>
        </fieldset>
      )}
      {/*button playing time & filter*/}
      <button type="button" onClick={handleClickTime}>
        Playing time
      </button>
      {displayTime && (
        <fieldset>
          <input
            type="radio"
            id="time1"
            name="time"
            value="30"
            checked={filter === "30"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="time1">30 min</label>
          <input
            type="radio"
            id="time2"
            name="time"
            value="60"
            checked={filter === "60"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="time2">60 min </label>
          <input
            type="radio"
            id="time3"
            name="time"
            value="90"
            checked={filter === "90"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="time3">90 min </label>
          <input
            type="radio"
            id="time4"
            name="time"
            value="120"
            checked={filter === "120"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="time3">120 min+</label>
        </fieldset>
      )}
      {/*button rating time & filter*/}
      <button type="button" onClick={handleClickRating}>
        Rating
      </button>
      {displayRating && (
        <fieldset>
          <input
            type="radio"
            id="rating0"
            name="rating"
            value="0"
            checked={filter === "0"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="rating0">0</label>
          <input
            type="radio"
            id="rating1"
            name="rating"
            value="1"
            checked={filter === "1"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="rating1">1 </label>
          <input
            type="radio"
            id="rating3"
            name="rating"
            value="2"
            checked={filter === "2"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="rating3">2</label>
          <input
            type="radio"
            id="rating3"
            name="rating"
            value="3"
            checked={filter === "3"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="rating3">3</label>
          <input
            type="radio"
            id="rating4"
            name="rating"
            value="4"
            checked={filter === "4"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="rating4">4</label>
          <input
            type="radio"
            id="rating5"
            name="rating"
            value="5"
            checked={filter === "5"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="rating5">5 </label>
          <input
            type="radio"
            id="rating6"
            name="rating"
            value="6"
            checked={filter === "6"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="rating6">6</label>
          <input
            type="radio"
            id="rating7"
            name="rating"
            value="7"
            checked={filter === "7"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="rating7">7</label>
          <input
            type="radio"
            id="rating8"
            name="rating"
            value="8"
            checked={filter === "8"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="rating8">8 </label>
          <input
            type="radio"
            id="rating9"
            name="rating"
            value="9"
            checked={filter === "9"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="rating9">9</label>
          <input
            type="radio"
            id="rating10"
            name="rating"
            value="10"
            checked={filter === "10"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="rating10">10</label>
        </fieldset>
      )}
      {/*button type of game & filter*/}
      <button type="button" onClick={handleClickType}>
        Type
      </button>
      {displayType && (
        <fieldset>
          <input
            type="radio"
            id="type1"
            name="type"
            value="Multi-Use Cards"
            checked={filter === "Multi-Use Cards"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="type1">Deck builder</label>
          <input
            type="radio"
            id="type2"
            name="type"
            value="Dice Rolling"
            checked={filter === "Dice Rolling"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="type2">Dice</label>
          <input
            type="radio"
            id="type3"
            name="type"
            value="Cooperative Game"
            checked={filter === "Cooperative Game"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="type3">Cooperative</label>
          <input
            type="radio"
            id="type4"
            name="type"
            value="Automatic Resource Growth"
            checked={filter === "Automatic Resource Growth"}
            onChange={handleChangeFilter}
          />
          <label htmlFor="type4">Ressource management</label>
        </fieldset>
      )}
    </>
  );
}

export default FilterPanel;
