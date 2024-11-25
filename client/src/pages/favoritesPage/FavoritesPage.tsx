import style from "./favoritesPage.module.css";

import CardFavorite from "../../components/cardFavorite/CardFavorite";

export default function FavoritesPage() {
  return (
    <main className={style.backgroundPage}>
      <CardFavorite />
    </main>
  );
}
