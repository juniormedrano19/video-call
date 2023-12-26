import React from "react";
import styles from "./loading.module.css";

export const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
      <div className={styles.text}>
        <h3>urpi</h3>
        <span>Cargando ...</span>
      </div>
    </div>
  );
};
