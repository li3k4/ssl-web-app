import React from "react";
import styles from "./WebProducts.module.css";

import web from "../../../resources/img/web.svg";
import phone from "../../../resources/img/phone.svg";

const WebProducts = () => {
  return (
    <div className={styles["item-web"]}>
      <div className={styles["product-name"]}>
        Products
        <img src={web} />
      </div>
      <div className={styles["container"]}>
        <div className={styles["content-p"]}>
          <div className={styles["child"]}>
            <div className={styles["child-text"]}>
              <h2>Netman</h2>
              <p>Система создания квестов и новелл</p>
            </div>
            <img src={phone} />
          </div>
          <div className={styles["child"]}>
            <div className={styles["child-text"]}>
              <h2>Netman</h2>
              <p>Система создания квестов и новелл</p>
            </div>
            <img src={phone} />
          </div>
          <div className={styles["child"]}>
            <div className={styles["child-text"]}>
              <h2>Netman</h2>
              <p>Система создания квестов и новелл</p>
            </div>
            <img src={phone} />
          </div>
          <div className={styles["child"]}>
            <div className={styles["child-text"]}>
              <h2>Netman</h2>
              <p>Система создания квестов и новелл</p>
            </div>
            <img src={phone} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProducts;
