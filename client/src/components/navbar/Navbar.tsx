import { NavLink } from "react-router-dom";
import profil from "../../assets/images/login-icon.png";
import logo from "../../assets/images/logo-boarder-line-big-transparent.png";
import loupe from "../../assets/images/search-loupe.png";
import style from "./navbar.module.css";

function Navbar() {
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
        <form className={style.searchBar}>
          <input type="search" className={style.inputSearch} />
          <button type="submit" className={style.inputButton}>
            <img
              src={loupe}
              alt="bouton de la barre de recherche"
              width="20px"
            />
          </button>
        </form>
        <NavLink to={"/libraryPage"}>
          <button type="button" className={style.buttonGames}>
            GAMES
          </button>
        </NavLink>
        <a href="https://bgg-json.azurewebsites.net/collection/edwalter">
          <img
            src={profil}
            alt="Bouton d'accès au profil"
            className={style.imgProfil}
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
