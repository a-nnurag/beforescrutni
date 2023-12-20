import React from "react";
import styles from "./Eventcontainer.module.css";
import Image from "next/image";

const Eventcontainer = (data: {
  id: number;
  src: string;
  title: string;
  descritption: string;
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={data.src}
        width={100}
        height={100}
        alt={data.title}
        className={styles.image}
      />
      <div className={styles.card__inner}>
        <h2 className={styles.card__inner_h2}>{data.title}</h2>
        <div className={styles.card__inner_p}>{data.descritption}</div>
      </div>
    </div>
  );
};

export default Eventcontainer;
