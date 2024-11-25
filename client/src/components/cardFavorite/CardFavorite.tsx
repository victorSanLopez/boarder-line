// import { useLoaderData } from "react-router-dom";
// import type { boardGameListType } from "../../assets/lib/definition";
// import CardGame from "../cardGame/CardGame";

export default function CardFavorite() {
  // const fullGame: boardGameListType[] = useLoaderData() as boardGameListType[];
  // const listedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  // const listedFavoritesSlider =
  //   JSON.parse(localStorage.getItem("favoritesSlider")) || [];
  // console.log(listedFavorites);
  return (
    <>
      <section>
        {/* je dois chercher le gameId dans la liste de jeu avec un map */}
        {/* {console.log(
          fullGame.find(
            ({ gameId }) =>
              gameId === Number.parseInt(listedFavoritesSlider[2]),
          ),
        )} */}
        {/* pour éviter les doublons, utiliser la methode includes */}

        {/* {listedFavorites.map((a: number, index: number) => (
          <h2 key={index}>{a}</h2>
        ))}
        {listedFavoritesSlider.map((a, index) => (
          <h2 key={index}>{a}</h2>
        ))} */}
        <button type="submit" onClick={() => localStorage.clear()}>
          Effacer vos favoris
        </button>
      </section>
    </>
  );
}
