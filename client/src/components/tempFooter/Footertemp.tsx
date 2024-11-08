import logoBoarderLine from "../../assets/images/logo-boarder-line-big-transparent.png";
import logoInstagram from "../../assets/images/logo-instagram.png";
import logoLinkedIn from "../../assets/images/logo-linkedin.png";
import logoYouTube from "../../assets/images/logo-youtube.png";
import style from "./tempfooter.module.css";

export default function Footertemp() {
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
            <img
              className={style.miniLogoAnimation}
              src={logoLinkedIn}
              alt="Logo LinkedIn"
            />
            <img
              className={style.miniLogoAnimation}
              src={logoInstagram}
              alt="Logo Instagram"
            />
            <img
              className={style.miniLogoAnimation}
              src={logoYouTube}
              alt="Logo YouTube"
            />
          </div>
        </div>
      </section>
      <section className={style.footerBottom}>
        <p>Mentions légales et CGU • Données personnelles et cookies</p>
      </section>
    </footer>
  );
}
