import React from "react";
import styles from "./Initativecss.module.css";
import Carousel from "../components/Carousel";

const Initiative = () => {
  return (
    <div id="initiative" className={styles.initiative}>
      <h1 className={styles.header}>Initative</h1>
      <div className={styles.body}>
        <h1 className={styles.bodyheader}>Opportunities</h1>
        <div className={styles.carousel}>
          <Carousel />
        </div>
        <button className={styles.button}>Explore</button>
      </div>
    </div>
  );
};

export default Initiative;
