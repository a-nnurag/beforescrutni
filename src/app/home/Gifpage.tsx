import React from "react";
import styles from "./Gifpagecss.module.css";
import Image from "next/image";
import Link from "next/link";

const Gifpage = () => {
  return (
    <div className={styles.body} id="gifpage">
      <video src="/video.mp4" autoPlay muted className={styles.video} />
      <button className={styles.button}>
        <Link
          href="https://dev-il-dev.github.io/edcwebsite/"
          className={styles.link}
        >
          Explore
        </Link>
      </button>
    </div>
  );
};

export default Gifpage;
