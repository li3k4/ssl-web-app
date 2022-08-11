import React from "react";
import styles from "./GameDevProducts.module.css";

import gamedev from "../../../resources/img/gamedev.svg";
import game from "../../../resources/img/game.svg";

const GameDevProducts = () => {
  return (
    <div className={styles["item-web"]}>
    <div className={styles["product-name"]}>
      Products
      <img src={gamedev} />
    </div>
    <div className={styles["container"]}>
      <div className={styles["content-p"]}>
        <div className={styles["child"]}>
          <div className={styles["child-text"]}>
            <h2>Netman</h2>
            <p>Система создания квестов и новелл</p>
          </div>
          <img className={styles["child-img"]} src={game} />
        </div>
        <div className={styles["child"]}>
          <div className={styles["child-text"]}>
            <h2>Netman</h2>
            <p>Система создания квестов и новелл</p>
          </div>
          <img src={game} />
        </div>
        <div className={styles["child"]}>
          <div className={styles["child-text"]}>
            <h2>Netman</h2>
            <p>Система создания квестов и новелл</p>
          </div>
          <img src={game} />
        </div>
      </div>
    </div>
  </div>
  );        
};

export default GameDevProducts;
