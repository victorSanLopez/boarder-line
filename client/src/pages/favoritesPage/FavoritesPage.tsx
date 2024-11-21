// import style from "./favoritesPage.module.css";

import { getFavorite, setFavorite } from "../../helpers/favoritesHelper";

export default function FavoritesPage() {
  //   const [idLike, setIdLike] = useState("hello");

  const handleClick = () => {
    setFavorite("salut", { id: 55 });
    getFavorite("salut");
  };

  return (
    <section>
      <h1>Welcome</h1>
      {/* <CardGame name={"john"} rating={10} image={"nada"} /> */}
      <button type="submit" onClick={handleClick}>
        click
      </button>
    </section>
  );
}
