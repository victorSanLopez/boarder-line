import style from "./Footer.module.css";
import logoBoarderLine from "../../assets/images/logo-boarder-line-big-transparent.png";
import logoLinkedIn from "../../assets/images/logo-linkedin.png";
import logoInstagram from "../../assets/images/logo-instagram.png";
import logoYouTube from "../../assets/images/logo-youtube.png";

export default function Footer() {
  return (
    <footer className={style.footerMain}>
      <section className={style.section}>
        <div className={style.footerRight}>
          <p>CONTACT US</p>
          <p>sloubigang@contact.com</p>
          <p>01 39 35 XX XX</p>
        </div>
        <div className={style.footerMiddle}>
          <h3>BOARDER LINE</h3>
          <img
            className={style.logoClass}
            src={logoBoarderLine}
            alt="Logo Boarder Line"
          />
        </div>
        <div className={style.footerLeft}>
          <p>FOLLOW US</p>
          <div className={style.social}>
            <img src={logoLinkedIn} alt="Logo LinkedIn" width="25px" />
            <img src={logoInstagram} alt="Logo Instagram" width="25px" />
            <img src={logoYouTube} alt="Logo YouTube" width="25px" />
          </div>
        </div>
      </section>
      <section className={style.footerBottom}>
        <p>Mentions légales et CGU • Données personnelles et cookies</p>
      </section>
    </footer>
  );
}
