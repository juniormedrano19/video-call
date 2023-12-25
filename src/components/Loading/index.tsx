import React from "react";
import styles from "./loading.module.css";


export const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.loader}>
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40"></circle>
        </svg>
      </div> */}
   
      <span className={styles.loader}></span> 
      <div className={styles.text}>
        <h3>urpi</h3>
        <span>Cargando ...</span>
      </div>
    </div>
  );
};
