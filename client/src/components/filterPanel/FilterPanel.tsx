function FilterPanel() {
  return (
    <>
      <button type="button">Max players</button>
      <fieldset>
        <input type="radio" id="maxPlayer1" name="player" value={1} />
        <label htmlFor="maxPlayer1">1 player</label>
        <input type="radio" id="maxPlayer2" name="player" value={2} />
        <label htmlFor="maxPlayer2">2 players</label>
        <input type="radio" id="maxPlayer3" name="player" value={3} />
        <label htmlFor="maxPlayer3">3 players</label>
        <input type="radio" id="maxPlayer4" name="player" value={4} />
        <label htmlFor="maxPlayer4">4 players+</label>
      </fieldset>
      <button type="button">Playing time</button>
      <fieldset>
        <input type="radio" id="time1" name="time" value={30} />
        <label htmlFor="time1">30 min</label>
        <input type="radio" id="time2" name="time" value={60} />
        <label htmlFor="time2">60 min </label>
        <input type="radio" id="time3" name="time" value={90} />
        <label htmlFor="time3">90 min </label>
        <input type="radio" id="time4" name="time" value={120} />
        <label htmlFor="time3">120 min+</label>
      </fieldset>
      <button type="button">Rating</button>
      <fieldset>
        <input type="radio" id="rating0" name="rating" value={0} />
        <label htmlFor="rating0">0</label>
        <input type="radio" id="rating1" name="rating" value={1} />
        <label htmlFor="rating1">1 </label>
        <input type="radio" id="rating3" name="rating" value={2} />
        <label htmlFor="rating3">2</label>
        <input type="radio" id="rating3" name="rating" value={3} />
        <label htmlFor="rating3">3</label>
        <input type="radio" id="rating4" name="rating" value={4} />
        <label htmlFor="rating4">4</label>
        <input type="radio" id="rating5" name="rating" value={5} />
        <label htmlFor="rating5">5 </label>
        <input type="radio" id="rating6" name="rating" value={6} />
        <label htmlFor="rating6">6</label>
        <input type="radio" id="rating7" name="rating" value={7} />
        <label htmlFor="rating7">7</label>
        <input type="radio" id="rating8" name="rating" value={8} />
        <label htmlFor="rating8">8 </label>
        <input type="radio" id="rating9" name="rating" value={9} />
        <label htmlFor="rating9">9</label>
        <input type="radio" id="rating10" name="rating" value={10} />
        <label htmlFor="rating10">10</label>
      </fieldset>
      <button type="button">Type</button>
      <fieldset>
        <input type="radio" id="type1" name="type" value="Multi-Use Cards" />
        <label htmlFor="type1">Deck builder</label>
        <input type="radio" id="type2" name="type" value="Dice Rolling" />
        <label htmlFor="type2">Dice</label>
        <input type="radio" id="type3" name="type" value="Cooperative Game" />
        <label htmlFor="type3">Cooperative</label>
        <input
          type="radio"
          id="type4"
          name="type"
          value="Automatic Resource Growth"
        />
        <label htmlFor="type4">Ressource management</label>
      </fieldset>
    </>
  );
}

export default FilterPanel;
