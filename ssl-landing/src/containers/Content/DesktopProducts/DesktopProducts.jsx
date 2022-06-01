import React from "react";
import styles from "./DesktopProducts.module.css";

import desktop from "../../../resources/img/desktop.svg";
import site from "../../../resources/img/site.svg";

const DesktopProducts = () => {
  return (
    <div className={styles["item-web"]}>
    <div className={styles["product-name"]}>
      Products
      <img src={desktop} />
    </div>
    <div className={styles["container"]}>
      <div className={styles["content-p"]}>
        <div className={styles["child"]}>
          <div className={styles["child-text"]}>
            <h2>Netman</h2>
            <p>Система создания квестов и новелл</p>
          </div>
          <img className={styles["child-img"]} src={site} />
        </div>
        <div className={styles["child"]}>
          <div className={styles["child-text"]}>
            <h2>Netman</h2>
            <p>Система создания квестов и новелл</p>
          </div>
          <img src={site} />
        </div>
        <div className={styles["child"]}>
          <div className={styles["child-text"]}>
            <h2>Netman</h2>
            <p>Система создания квестов и новелл</p>
          </div>
          <img src={site} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default DesktopProducts;
