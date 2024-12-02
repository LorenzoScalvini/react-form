import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p className={style.text}>© 2024 Lorenzo Scalvini.</p>
        <div className={style.socials}>
          <a href="https://facebook.com" className={style.socialLink}>
            Facebook
          </a>
          <a href="https://twitter.com" className={style.socialLink}>
            Twitter
          </a>
          <a href="https://instagram.com" className={style.socialLink}>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
