import React from "react";
import styles from "./Footer.module.scss";

const pages = [
  {
    page: "Superintendencia de Salud",
    url: "https://www.superdesalud.gob.cl/",
  },
  { page: "Compin", url: "https://milicenciamedica.cl/" },
  { page: "Suseso", url: "https://www.suseso.cl/601/w3-channel.html" },
  { page: "Chile Atiende", url: "https://www.chileatiende.gob.cl/" },
];

const Footer = () => {
  return (
    <footer id="enlaces">
      <div className={styles.FooterCont}>
        <div className={styles.BetterLogo}>
          <img className={styles.logo} src="/isapre_2.png" alt="Logo Isapre" />
        </div>
        <div className={styles.Pages}>
          {pages.map((page) => (
            <a
              key={page.page}
              className={styles.ButtonPages}
              href={page.url}
              target="_blank"
            >
              {page.page}
            </a>
          ))}
        </div>
        <hr className={styles.hrStyle} />
        <div className={styles.textFoot}>
          <p>
            Todos nuestros ejecutivos cuentan con codigo vigente en la
            superintendencia de salud.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
