import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    
        <div id="down">
<div className={styles["footer"]}>
      <div className={styles["item-footer"]}>
      <h3>Контакты</h3>
        <a href=" ">solarsnowlight.ua@gmail.com </a>
        <a>+736888957144</a>
        </div>
        <div className={styles["item-footer"]}>     
        <h3>Местоположение</h3>   
        <a href="">Россия, Иркутск, ул.Улица 6</a>
        </div>
    </div>
  </div>


  );
};

export default Footer;
