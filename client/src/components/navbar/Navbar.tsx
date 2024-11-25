import { useForm } from "react-hook-form";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-boarder-line-big-transparent.png";
import searchIcon from "../../assets/images/search-icon.png";
import type { boardGameListType } from "../../assets/lib/definition";
import style from "./navbar.module.css";

function Navbar() {
  // loader
  const boardGames: boardGameListType[] =
    useLoaderData() as boardGameListType[];
  // controle de la saisie
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "",
    },
  });
  // comparaison de la saisie de l'utilisateur
  const navigate = useNavigate();
  const onSubmit = (data: { search: string }) => {
    const boardGameSearchCase = data.search
      .toLowerCase()
      .replace(/[^\.a-zA-Z0-9-:&()']/g, "");
    // recherche dans la base de donnée
    const foundBoardGame = boardGames.find(
      (g) => g.name.toLowerCase().replace(/\s/g, "") === boardGameSearchCase,
    );
    // redirection
    if (foundBoardGame) {
      navigate(`details/${foundBoardGame.gameId}`);
    } else {
      alert("Game not found!");
    }
  };

  return (
    <nav className={style.navbar}>
      <NavLink to={"/"}>
        <img
          src={logo}
          alt="Logo du site Boarder Line"
          className={style.imgLogo}
        />
      </NavLink>
      <div className={style.rightNavbar}>
        <form className={style.searchBar} onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("search", {
              required: "Input is require.",
              minLength: {
                value: 4,
                message: "Mininum length is 5 characters.",
              },
              maxLength: {
                value: 40,
                message: "Too much characters.",
              },
            })}
            type="search"
            placeholder="Search a game"
            className={style.inputSearch}
          />
          <button type="submit" className={style.inputButton}>
            <img src={searchIcon} alt="search button icon" width="20px" />
          </button>
          <p className={style.inputError}>{errors.search?.message}</p>
        </form>
        <NavLink to={"/library"}>
          <button type="button" className={style.buttons}>
            GAMES
          </button>
        </NavLink>
        <NavLink to={"/favorites"}>
          <button type="button" className={style.buttons}>
            FAVORITES
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
