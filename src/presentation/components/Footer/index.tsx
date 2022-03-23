import React from "react";
import styles from "./styles.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Para estudos de Clean Architecture</p>
      <a
        href="https://github.com/liandro-wesley/4devs-enquente-para-programadores"
        target="_blank"
      >
        Acesse o repositório aqui
      </a>
    </footer>
  );
};

export default Footer;
