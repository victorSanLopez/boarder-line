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

  // je récupère les favoris de la homePage
  const favoritesSlider = JSON.parse(
    localStorage.getItem("favoritesSlider") || "[]",
  );
  const listedFavoritesSlider = favoritesSlider.map((a: string) =>
    Number.parseInt(a),
  );
  const favoritesGamesSlider = fullGame.filter((game) =>
    listedFavoritesSlider.includes(game.gameId),
  );

  // je récupère les favoris de la libraryPage
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const listedFavorites = favorites.map((a: string) => Number.parseInt(a));
  const favoritesGames = fullGame.filter((game) =>
    listedFavorites.includes(game.gameId),
  );

  return (
    <>
      <header>
        <SmallHeader />
      </header>
      <main>
        <section className={style.backgroundPage}>
          <article className={style.cards}>
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
            {favoritesGamesSlider.map((a) => (
              <CardGame
                key={a.gameId}
                gameId={a.gameId}
                name={a.name}
                rating={a.averageRating}
                image={a.image}
                handleClickFavorite={handleClickFavorite}
              />
            ))}
          </article>
          <button
            type="submit"
            onClick={() => localStorage.clear()}
            className={style.button}
          >
            Effacer vos favoris
          </button>
        </section>
      </main>
    </>
  );
}
