import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footerMain}>
      <section className={style.section}>
        <div className={style.footerRight}>
          <p>Contacts</p>
          <p>sloubigang@contact.com</p>
          <p>01 39 35 XX XX</p>
        </div>
        <div className={style.footerMiddle}>
          <h3>BOARDER LINE</h3>
          <img
            className={style.logoClass}
            src="https://picsum.photos/100"
            alt="Logo Boarder Line"
          />
        </div>
        <div className={style.footerLeft}>
          <p>Follow us</p>
          <ul>
            <li className={style.social}>
              <img src="https://picsum.photos/25" alt="Logo LinkedIn" />
              <img src="https://picsum.photos/25" alt="Logo Instagram" />
              <img src="https://picsum.photos/25" alt="Logo Vero" />
            </li>
          </ul>
        </div>
      </section>
      <section>
        <p>Mentions légales et CGU • Données personnelles et cookies</p>
      </section>
    </footer>
  );
}
