import style from "./favoritesPage.module.css";

import CardFavorite from "../../components/cardFavorite/CardFavorite";
import SmallHeader from "../../components/smallHeader/SmallHeader";

export default function FavoritesPage() {
  return (
    <>
      <header>
        <SmallHeader />
      </header>
      <main className={style.backgroundPage}>
        <CardFavorite />
      </main>
    </>
  );
}
