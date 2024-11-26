import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import type { boardGameListType } from "../../assets/lib/definition";
import CardGame from "../../components/cardGame/CardGame";
import SmallHeader from "../../components/smallHeader/SmallHeader";
import style from "./favoritesPage.module.css";

export default function FavoritesPage() {
  const fullGame: boardGameListType[] = useLoaderData() as boardGameListType[];

  // ajouter un nouveau favoris au click
  const [favorite, setFavorite] = useState<string[]>([]);
  const handleClickFavorite = (id: string) => {
    const newFavorite = [...favorite, id];
    setFavorite(newFavorite);
    localStorage.setItem("favorites", JSON.stringify(newFavorite));
  };

  // const favoritesSlider =
  //   JSON.parse(localStorage.getItem("favoritesSlider")) || [];

  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  const listedFavorites = favorites.map((a: string) => Number.parseInt(a));

  const favoritesGames = fullGame.filter((game) =>
    listedFavorites.includes(game.gameId),
  );
  // console.log(favoritesGames);

  return (
    <>
      <header>
        <SmallHeader />
      </header>
      <main className={style.backgroundPage}>
        {favoritesGames.map((a) => (
          <CardGame
            key={a.gameId}
            gameId={a.gameId}
            name={a.name}
            rating={a.averageRating}
            image={a.image}
            handleClickFavorite={handleClickFavorite}
          />
        ))}

        <button type="submit" onClick={() => localStorage.clear()}>
          Effacer vos favoris
        </button>
      </main>
    </>
  );
}
